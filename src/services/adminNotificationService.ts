import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

// Notification priority levels
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';

// Notification channels
export type NotificationChannel = 'in-app' | 'email' | 'sms' | 'telegram' | 'discord' | 'slack';

// Notification status
export type NotificationStatus = 'pending' | 'sent' | 'failed' | 'delivered' | 'read';

// Notification data
export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  priority: NotificationPriority;
  channels: NotificationChannel[];
  status: Record<NotificationChannel, NotificationStatus>;
  metadata: Record<string, any>;
  user_id?: string;
  created_at: string;
  updated_at: string;
}

// Channel configurations
interface ChannelConfig {
  enabled: boolean;
  target: string;
}

interface NotificationConfig {
  email?: ChannelConfig;
  sms?: ChannelConfig;
  telegram?: ChannelConfig;
  discord?: ChannelConfig;
  slack?: ChannelConfig;
}

/**
 * Admin notification service that supports multiple channels
 */
export const adminNotificationService = {
  // Config defaults
  defaultConfig: {
    email: {
      enabled: true,
      target: 'admin@handywriterz.com'
    },
    telegram: {
      enabled: process.env.TELEGRAM_ADMIN_CHAT_ID ? true : false,
      target: process.env.TELEGRAM_ADMIN_CHAT_ID || ''
    }
  } as NotificationConfig,
  
  /**
   * Send notification to admin with priority and channel selection
   */
  async notify(
    title: string,
    message: string,
    options: {
      priority?: NotificationPriority;
      channels?: NotificationChannel[];
      metadata?: Record<string, any>;
      user_id?: string;
      config?: NotificationConfig;
    } = {}
  ): Promise<{ success: boolean; notificationId: string; channels: NotificationChannel[] }> {
    const { 
      priority = 'medium',
      channels = ['in-app', 'email'],
      metadata = {},
      user_id,
      config = this.defaultConfig
    } = options;
    
    const notificationId = uuidv4();
    const timestamp = new Date().toISOString();
    
    // Create notification record
    const notification: AdminNotification = {
      id: notificationId,
      title,
      message,
      priority,
      channels,
      status: this.initializeStatus(channels),
      metadata,
      user_id,
      created_at: timestamp,
      updated_at: timestamp
    };
    
    // Try to store in database
    try {
      const { error } = await supabase
        .from('admin_notifications')
        .insert({
          id: notification.id,
          title: notification.title,
          message: notification.message,
          priority: notification.priority,
          channels: notification.channels,
          status: notification.status,
          metadata: notification.metadata,
          user_id: notification.user_id,
          created_at: notification.created_at,
          updated_at: notification.updated_at
        });
      
      if (error) console.error('Failed to store notification:', error);
    } catch (error) {
      console.error('Error storing notification:', error);
      // Continue even if storage fails - we'll try to deliver anyway
    }
    
    // Dispatch to all channels
    const successfulChannels: NotificationChannel[] = [];
    
    // Dispatch in parallel
    const dispatchers = channels.map(channel => 
      this.dispatchToChannel(notification, channel, config)
        .then(success => {
          if (success) successfulChannels.push(channel);
          notification.status[channel] = success ? 'sent' : 'failed';
        })
        .catch(() => {
          notification.status[channel] = 'failed';
        })
    );
    
    await Promise.allSettled(dispatchers);
    
    // Update notification status
    notification.updated_at = new Date().toISOString();
    
    try {
      await supabase
        .from('admin_notifications')
        .update({
          status: notification.status,
          updated_at: notification.updated_at
        })
        .eq('id', notification.id);
    } catch (error) {
      console.error('Failed to update notification status:', error);
    }
    
    return {
      success: successfulChannels.length > 0,
      notificationId: notification.id,
      channels: successfulChannels
    };
  },
  
  /**
   * Initialize status for all channels
   */
  initializeStatus(channels: NotificationChannel[]): Record<NotificationChannel, NotificationStatus> {
    const status: Partial<Record<NotificationChannel, NotificationStatus>> = {};
    
    channels.forEach(channel => {
      status[channel] = 'pending';
    });
    
    return status as Record<NotificationChannel, NotificationStatus>;
  },
  
  /**
   * Dispatch notification to a specific channel
   */
  async dispatchToChannel(
    notification: AdminNotification,
    channel: NotificationChannel,
    config: NotificationConfig
  ): Promise<boolean> {
    try {
      switch (channel) {
        case 'in-app':
          return await this.sendInAppNotification(notification);
          
        case 'email':
          if (!config.email?.enabled) return false;
          return await this.sendEmailNotification(notification, config.email.target);
          
        case 'sms':
          if (!config.sms?.enabled) return false;
          return await this.sendSmsNotification(notification, config.sms.target);
          
        case 'telegram':
          if (!config.telegram?.enabled) return false;
          return await this.sendTelegramNotification(notification, config.telegram.target);
          
        case 'discord':
          if (!config.discord?.enabled) return false;
          return await this.sendDiscordNotification(notification, config.discord.target);
          
        case 'slack':
          if (!config.slack?.enabled) return false;
          return await this.sendSlackNotification(notification, config.slack.target);
          
        default:
          console.error(`Unsupported notification channel: ${channel}`);
          return false;
      }
    } catch (error) {
      console.error(`Error sending notification to ${channel}:`, error);
      return false;
    }
  },
  
  /**
   * Send in-app notification
   */
  async sendInAppNotification(notification: AdminNotification): Promise<boolean> {
    try {
      // First try via admin_messages table
      try {
        const { error } = await supabase
          .from('admin_messages')
          .insert({
            id: notification.id,
            title: notification.title,
            message: notification.message,
            priority: notification.priority,
            metadata: notification.metadata,
            user_id: notification.user_id,
            is_read: false,
            created_at: notification.created_at
          });
        
        if (!error) return true;
      } catch (adminError) {
        console.warn('Admin messages table not available, trying messages table');
      }
      
      // Fall back to regular messages table
      try {
        if (!notification.user_id) {
          // If no user_id, we can't use this fallback
          throw new Error('No user_id available for messages table');
        }
        
        // Create custom content format to make admin notifications stand out
        const formattedContent = `
📢 ADMIN NOTIFICATION - ${notification.priority.toUpperCase()} PRIORITY
----------------------------------------------------------
${notification.title}
----------------------------------------------------------
${notification.message}
        `.trim();
        
        const { error } = await supabase
          .from('messages')
          .insert({
            user_id: notification.user_id,
            content: formattedContent,
            sender_type: 'admin',
            is_read: false
          });
        
        if (error) throw error;
        return true;
      } catch (error) {
        console.error('Failed to send in-app notification:', error);
        
        // Try one more fallback - message conversation format
        try {
          if (!notification.user_id) throw new Error('No user_id available');
          
          // Check if conversation exists
          const { data: existingConversation } = await supabase
            .from('conversations')
            .select('id')
            .eq('user_id', notification.user_id)
            .limit(1);
          
          let conversationId: string;
          
          if (!existingConversation || existingConversation.length === 0) {
            // Create conversation
            const { data: newConversation, error: convError } = await supabase
              .from('conversations')
              .insert({
                user_id: notification.user_id,
                admin_id: 'system',
                subject: 'Admin Notifications',
                status: 'active',
                last_message: notification.title,
                last_message_time: notification.created_at
              })
              .select('id')
              .single();
            
            if (convError || !newConversation) throw convError || new Error('Failed to create conversation');
            conversationId = newConversation.id;
          } else {
            conversationId = existingConversation[0].id;
            
            // Update conversation
            await supabase
              .from('conversations')
              .update({
                status: 'active',
                last_message: notification.title,
                last_message_time: notification.created_at
              })
              .eq('id', conversationId);
          }
          
          // Add message to conversation
          const { error: msgError } = await supabase
            .from('messages')
            .insert({
              conversation_id: conversationId,
              sender_id: 'system',
              receiver_id: notification.user_id,
              content: `${notification.title}\n\n${notification.message}`,
              is_read: false,
              created_at: notification.created_at
            });
          
          if (msgError) throw msgError;
          return true;
        } catch (fallbackError) {
          console.error('All in-app notification attempts failed:', fallbackError);
          return false;
        }
      }
    } catch (error) {
      console.error('In-app notification error:', error);
      return false;
    }
  },
  
  /**
   * Send email notification
   */
  async sendEmailNotification(notification: AdminNotification, target: string): Promise<boolean> {
    try {
      // Prepare message content
      const subject = `[${notification.priority.toUpperCase()}] ${notification.title}`;
      
      // Prepare HTML content
      const priorityColors: Record<NotificationPriority, string> = {
        low: '#28a745',
        medium: '#17a2b8', 
        high: '#ffc107',
        urgent: '#dc3545'
      };
      
      const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: ${priorityColors[notification.priority]}; color: white; padding: 10px 15px; border-radius: 5px 5px 0 0;">
            <h2 style="margin: 0;">${notification.title}</h2>
            <p style="margin: 5px 0 0; font-size: 14px;">Priority: ${notification.priority.toUpperCase()}</p>
          </div>
          <div style="border: 1px solid #ddd; border-top: none; padding: 15px; border-radius: 0 0 5px 5px;">
            <div style="white-space: pre-wrap;">${notification.message}</div>
            ${notification.user_id ? `<p style="margin-top: 20px; color: #666;">User ID: ${notification.user_id}</p>` : ''}
            <p style="margin-top: 5px; color: #666;">Notification ID: ${notification.id}</p>
            <p style="margin-top: 5px; color: #666;">Time: ${new Date(notification.created_at).toLocaleString()}</p>
          </div>
        </div>
      `;
      
      // Try to use Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: target,
          subject,
          html
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to send email notification:', error);
      return false;
    }
  },
  
  /**
   * Send SMS notification
   */
  async sendSmsNotification(notification: AdminNotification, target: string): Promise<boolean> {
    try {
      // Format the message for SMS (shortened)
      const priorityPrefix = {
        low: '[INFO]',
        medium: '[NOTICE]',
        high: '[IMPORTANT]',
        urgent: '[URGENT]'
      };
      
      const message = `${priorityPrefix[notification.priority]} ${notification.title}\n\n${notification.message.substring(0, 140)}${notification.message.length > 140 ? '...' : ''}`;
      
      // Use Supabase Edge Function to send SMS
      const { error } = await supabase.functions.invoke('send-sms', {
        body: {
          to: target,
          message
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to send SMS notification:', error);
      return false;
    }
  },
  
  /**
   * Send Telegram notification
   */
  async sendTelegramNotification(notification: AdminNotification, target: string): Promise<boolean> {
    try {
      // Format message for Telegram (Markdown)
      const priorityEmoji = {
        low: '📓',
        medium: '📘',
        high: '📙',
        urgent: '📕'
      };
      
      const message = `
${priorityEmoji[notification.priority]} *${notification.title}*
_Priority: ${notification.priority.toUpperCase()}_

${notification.message}

${notification.user_id ? `👤 User: \`${notification.user_id}\`` : ''}
🆔 Notification ID: \`${notification.id}\`
⏰ Time: ${new Date(notification.created_at).toLocaleString()}
      `.trim();
      
      // Use Supabase Edge Function to send Telegram message
      const { error } = await supabase.functions.invoke('telegram-notify', {
        body: {
          chatId: target,
          message,
          parseMode: 'Markdown'
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to send Telegram notification:', error);
      return false;
    }
  },
  
  /**
   * Send Discord notification (webhook)
   */
  async sendDiscordNotification(notification: AdminNotification, webhookUrl: string): Promise<boolean> {
    try {
      // Set up colors for different priority levels
      const colors = {
        low: 5763719, // Green
        medium: 2201331, // Blue
        high: 16776960, // Yellow
        urgent: 16711680 // Red
      };
      
      // Format the message for Discord webhook
      const payload = {
        embeds: [{
          title: notification.title,
          description: notification.message,
          color: colors[notification.priority],
          fields: [
            {
              name: 'Priority',
              value: notification.priority.toUpperCase(),
              inline: true
            },
            {
              name: 'Time',
              value: new Date(notification.created_at).toLocaleString(),
              inline: true
            }
          ],
          footer: {
            text: `Notification ID: ${notification.id}`
          }
        }]
      };
      
      // Add user field if available
      if (notification.user_id) {
        payload.embeds[0].fields.push({
          name: 'User ID',
          value: notification.user_id,
          inline: true
        });
      }
      
      // Use Supabase Edge Function to send Discord webhook
      const { error } = await supabase.functions.invoke('webhook-notify', {
        body: {
          url: webhookUrl,
          payload
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to send Discord notification:', error);
      return false;
    }
  },
  
  /**
   * Send Slack notification (webhook)
   */
  async sendSlackNotification(notification: AdminNotification, webhookUrl: string): Promise<boolean> {
    try {
      // Set up colors for different priority levels
      const colors = {
        low: '#28a745',
        medium: '#17a2b8',
        high: '#ffc107',
        urgent: '#dc3545'
      };
      
      // Format the message for Slack webhook
      const payload = {
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: notification.title
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: notification.message
            }
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `*Priority:* ${notification.priority.toUpperCase()}`
              },
              {
                type: 'mrkdwn',
                text: `*Time:* ${new Date(notification.created_at).toLocaleString()}`
              },
              {
                type: 'mrkdwn',
                text: `*ID:* ${notification.id}`
              }
            ]
          }
        ],
        attachments: [
          {
            color: colors[notification.priority]
          }
        ]
      };
      
      // Use Supabase Edge Function to send Slack webhook
      const { error } = await supabase.functions.invoke('webhook-notify', {
        body: {
          url: webhookUrl,
          payload
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to send Slack notification:', error);
      return false;
    }
  },
  
  /**
   * Mark notification as read
   */
  async markAsRead(notificationId: string): Promise<boolean> {
    try {
      // Try admin_messages table first
      try {
        const { error } = await supabase
          .from('admin_messages')
          .update({ is_read: true })
          .eq('id', notificationId);
        
        if (!error) return true;
      } catch (error) {
        console.warn('Admin messages table not available');
      }
      
      // Try updating the notification record
      const { error } = await supabase
        .from('admin_notifications')
        .update({
          'status.in-app': 'read',
          updated_at: new Date().toISOString()
        })
        .eq('id', notificationId);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
      return false;
    }
  }
};

export default adminNotificationService; 