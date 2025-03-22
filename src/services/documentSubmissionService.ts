import { supabase } from '@/lib/supabase';
import { storageService } from './storageService';
import { v4 as uuidv4 } from 'uuid';

// Define types
export interface SubmissionFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  path: string;
}

export interface SubmissionMetadata {
  orderId?: string;
  orderNumber?: string;
  serviceType?: string;
  subjectArea?: string;
  wordCount?: number;
  studyLevel?: string;
  module?: string;
  dueDate?: string;
  instructions?: string;
}

export interface SubmissionResult {
  success: boolean;
  submissionId?: string;
  files?: SubmissionFile[];
  message: string;
  error?: any;
  notificationChannels?: string[];
}

// Constants
const SUBMISSION_BUCKET = 'submissions';
const DEFAULT_ADMIN_EMAIL = 'admin@handywriterz.com';
const MAX_RETRIES = 3;
const TELEGRAM_ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID || '';

export const documentSubmissionService = {
  /**
   * Initialize submission storage
   */
  async ensureStorageReady(): Promise<boolean> {
    try {
      // Check if bucket exists, create if not
      const bucket = await storageService.getBucket(SUBMISSION_BUCKET);
      if (!bucket) {
        await storageService.createBucket(SUBMISSION_BUCKET, {
          public: false,
          fileSizeLimit: 100 * 1024 * 1024 // 100MB
        });
      }
      return true;
    } catch (error) {
      console.error("Failed to ensure storage is ready:", error);
      return false;
    }
  },

  /**
   * Submit documents to admin with multi-channel notification
   */
  async submitDocumentsToAdmin(
    userId: string,
    files: File[],
    metadata: SubmissionMetadata,
    options: {
      notifyAdminEmail?: boolean;
      notifyTelegram?: boolean;
      notifyInApp?: boolean;
      adminEmail?: string;
    } = {}
  ): Promise<SubmissionResult> {
    const submissionId = uuidv4();
    const timestamp = new Date().toISOString();
    const folderPath = `${userId}/${submissionId}`;
    const successfulChannels: string[] = [];
    
    try {
      // Ensure storage is ready
      const storageReady = await this.ensureStorageReady();
      if (!storageReady) {
        throw new Error("Storage system is not available");
      }

      // 1. Upload files to secure storage
      const uploadedFiles: SubmissionFile[] = [];
      for (const file of files) {
        const result = await this.uploadFileWithRetry(file, folderPath);
        if (result) {
          uploadedFiles.push({
            id: uuidv4(),
            name: file.name,
            size: file.size,
            type: file.type,
            url: result.url,
            path: result.path
          });
        } else {
          throw new Error(`Failed to upload file: ${file.name}`);
        }
      }

      // 2. Store submission record in database
      const submissionData = {
        id: submissionId,
        user_id: userId,
        files: uploadedFiles,
        metadata,
        status: 'pending',
        created_at: timestamp,
        updated_at: timestamp
      };

      const { error: dbError } = await supabase
        .from('document_submissions')
        .insert(submissionData);

      if (dbError) {
        console.error("Database error storing submission:", dbError);
        // Continue with notification even if DB fails
      } else {
        successfulChannels.push('database');
      }

      // 3. Try all notification channels with independent error handling
      const channels = {
        inApp: options.notifyInApp !== false,
        email: options.notifyAdminEmail !== false, 
        telegram: options.notifyTelegram !== false && TELEGRAM_ADMIN_CHAT_ID
      };

      // a. In-app notification (message)
      if (channels.inApp) {
        const inAppSuccess = await this.notifyAdminViaInAppMessage(
          userId,
          submissionId,
          uploadedFiles,
          metadata
        );
        if (inAppSuccess) successfulChannels.push('in-app');
      }

      // b. Email notification
      if (channels.email) {
        const emailSuccess = await this.notifyAdminViaEmail(
          options.adminEmail || DEFAULT_ADMIN_EMAIL,
          userId,
          submissionId,
          uploadedFiles,
          metadata
        );
        if (emailSuccess) successfulChannels.push('email');
      }

      // c. Telegram notification (if enabled)
      if (channels.telegram) {
        const telegramSuccess = await this.notifyAdminViaTelegram(
          submissionId,
          uploadedFiles,
          metadata
        );
        if (telegramSuccess) successfulChannels.push('telegram');
      }

      // 4. Return success if at least one channel worked
      if (successfulChannels.length > 0) {
        return {
          success: true,
          submissionId,
          files: uploadedFiles,
          message: `Document submission successful via: ${successfulChannels.join(', ')}`,
          notificationChannels: successfulChannels
        };
      } else {
        throw new Error("Failed to notify admin through any available channel");
      }
      
    } catch (error) {
      console.error("Document submission failed:", error);
      
      // If we have files but notification failed, return partial success
      if (successfulChannels.includes('database')) {
        return {
          success: true,
          submissionId,
          message: "Files uploaded but admin notification failed. Please contact support.",
          error,
          notificationChannels: successfulChannels
        };
      }
      
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error during document submission",
        error
      };
    }
  },

  /**
   * Upload file with retry logic
   */
  async uploadFileWithRetry(
    file: File,
    folderPath: string,
    retries: number = MAX_RETRIES
  ): Promise<{ path: string; url: string } | null> {
    let attempt = 0;
    
    while (attempt < retries) {
      try {
        const result = await storageService.uploadFile(file, {
          bucket: SUBMISSION_BUCKET,
          path: folderPath + '/'
        });
        
        if (result) return result;
        
        // If null was returned, try again
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      } catch (error) {
        console.error(`Upload attempt ${attempt + 1} failed:`, error);
        attempt++;
        if (attempt >= retries) return null;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
    
    return null;
  },

  /**
   * Notify admin via in-app messaging system
   */
  async notifyAdminViaInAppMessage(
    userId: string,
    submissionId: string,
    files: SubmissionFile[],
    metadata: SubmissionMetadata
  ): Promise<boolean> {
    try {
      // Format the message content
      const fileLinks = files.map(file => 
        `- ${file.name} (${this.formatFileSize(file.size)}): ${file.url}`
      ).join('\n');
      
      const metadataText = Object.entries(metadata)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
        .join('\n');
      
      const messageContent = `
Document Submission (ID: ${submissionId})

${metadataText}

Files:
${fileLinks}
      `.trim();

      // Insert into simplified messages table
      const { error } = await supabase
        .from('messages')
        .insert({
          user_id: userId,
          content: messageContent,
          sender_type: 'user',
          is_read: false,
          created_at: new Date().toISOString()
        });
      
      if (error) {
        // If error contains specific text about column not existing,
        // try alternate structure
        if (error.message && error.message.includes('column "user_id" of relation "messages" does not exist')) {
          // Try with conversation-based structure
          const { data: convData, error: convError } = await supabase
            .from('conversations')
            .select('id')
            .eq('user_id', userId)
            .limit(1);
          
          if (convError || !convData || convData.length === 0) {
            // Create new conversation
            const { data: newConv, error: newConvError } = await supabase
              .from('conversations')
              .insert({
                user_id: userId,
                admin_id: 'system',
                subject: 'Document Submission',
                status: 'active',
                last_message: 'New document submission',
                last_message_time: new Date().toISOString()
              })
              .select('id')
              .single();
            
            if (newConvError || !newConv) throw newConvError || new Error('Failed to create conversation');
            
            // Now insert message into this conversation
            const { error: msgError } = await supabase
              .from('messages')
              .insert({
                conversation_id: newConv.id,
                sender_id: userId,
                content: messageContent,
                is_read: false,
                created_at: new Date().toISOString()
              });
            
            if (msgError) throw msgError;
          } else {
            // Use existing conversation
            const { error: msgError } = await supabase
              .from('messages')
              .insert({
                conversation_id: convData[0].id,
                sender_id: userId,
                content: messageContent,
                is_read: false,
                created_at: new Date().toISOString()
              });
            
            if (msgError) throw msgError;
          }
        } else {
          throw error;
        }
      }
      
      return true;
    } catch (error) {
      console.error("Failed to notify admin via in-app message:", error);
      return false;
    }
  },

  /**
   * Notify admin via email
   */
  async notifyAdminViaEmail(
    adminEmail: string,
    userId: string,
    submissionId: string,
    files: SubmissionFile[],
    metadata: SubmissionMetadata
  ): Promise<boolean> {
    try {
      // Format the message for email
      const fileLinks = files.map(file => 
        `<li><a href="${file.url}">${file.name}</a> (${this.formatFileSize(file.size)})</li>`
      ).join('');
      
      const metadataHtml = Object.entries(metadata)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `<tr><th>${key.charAt(0).toUpperCase() + key.slice(1)}</th><td>${value}</td></tr>`)
        .join('');
      
      const emailHtml = `
        <h2>New Document Submission</h2>
        <p><strong>Submission ID:</strong> ${submissionId}</p>
        <p><strong>User ID:</strong> ${userId}</p>
        
        <h3>Metadata</h3>
        <table border="1">
          <tbody>
            ${metadataHtml}
          </tbody>
        </table>
        
        <h3>Files</h3>
        <ul>
          ${fileLinks}
        </ul>
      `;
      
      // Try to use Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: adminEmail,
          subject: `New Document Submission (ID: ${submissionId})`,
          html: emailHtml
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error("Failed to notify admin via email:", error);
      return false;
    }
  },

  /**
   * Notify admin via Telegram
   */
  async notifyAdminViaTelegram(
    submissionId: string,
    files: SubmissionFile[],
    metadata: SubmissionMetadata
  ): Promise<boolean> {
    if (!TELEGRAM_ADMIN_CHAT_ID) return false;
    
    try {
      // Format message for Telegram
      const fileLinks = files.map(file => 
        `- [${file.name}](${file.url}) (${this.formatFileSize(file.size)})`
      ).join('\n');
      
      const metadataText = Object.entries(metadata)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `*${key.charAt(0).toUpperCase() + key.slice(1)}*: ${value}`)
        .join('\n');
      
      const message = `
*New Document Submission*
ID: \`${submissionId}\`

${metadataText}

*Files:*
${fileLinks}
      `.trim();
      
      // Use Supabase Edge Function to send Telegram message
      const { error } = await supabase.functions.invoke('telegram-notify', {
        body: {
          chatId: TELEGRAM_ADMIN_CHAT_ID,
          message,
          parseMode: 'Markdown'
        }
      });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error("Failed to notify admin via Telegram:", error);
      return false;
    }
  },
  
  /**
   * Format file size for display
   */
  formatFileSize(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
};

export default documentSubmissionService; 