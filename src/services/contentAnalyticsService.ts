import { supabase } from '@/lib/supabase';

export interface ContentAnalytics {
  postId: string;
  views: number;
  uniqueVisitors: number;
  avgTimeOnPage: string;
  bounceRate: number;
  likes: number;
  shares: number;
  clickThroughRate: number;
}

export interface AnalyticsSummary {
  totalViews: number;
  totalUniqueVisitors: number;
  avgTimeOnPage: string;
  avgBounceRate: number;
  totalLikes: number;
  totalShares: number;
  avgClickThroughRate: number;
  topReferrers: Array<{ source: string; count: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
  trendsData: Array<{ date: string; views: number }>;
}

export interface AuditLogEntry {
  id: string;
  action: 'create' | 'update' | 'delete' | 'publish' | 'unpublish' | 'archive';
  createdAt: string;
  changes?: {
    old?: Record<string, any>;
    new?: Record<string, any>;
  };
}

interface PageViewData {
  visitorId: string;
  referrer?: string;
  deviceType: string;
}

class ContentAnalyticsService {
  private visitorId: string;

  constructor() {
    this.visitorId = this.getOrCreateVisitorId();
  }

  private getOrCreateVisitorId(): string {
    let visitorId = localStorage.getItem('visitor_id');
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem('visitor_id', visitorId);
    }
    return visitorId;
  }

  async trackPageView(postId: string, metadata: Partial<PageViewData> = {}) {
    try {
      const viewData = {
        post_id: postId,
        visitor_id: this.visitorId,
        referrer: metadata.referrer || document.referrer,
        device_type: metadata.deviceType || this.detectDeviceType(),
        view_duration: null // Will be updated on page leave
      };

      const { data, error } = await supabase
        .from('page_views')
        .insert([viewData])
        .select()
        .single();

      if (error) {
        console.error('Error tracking page view:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in trackPageView:', error);
      return null;
    }
  }

  async updateViewDuration(viewId: string, duration: number) {
    try {
      const { error } = await supabase
        .from('page_views')
        .update({ view_duration: `${duration} seconds` })
        .eq('id', viewId);

      if (error) {
        console.error('Error updating view duration:', error);
      }
    } catch (error) {
      console.error('Error in updateViewDuration:', error);
    }
  }

  async getAnalyticsSummary(postId: string): Promise<AnalyticsSummary | null> {
    try {
      // Fetch basic analytics
      const { data: analytics, error: analyticsError } = await supabase
        .from('content_analytics')
        .select('*')
        .eq('post_id', postId)
        .single();

      if (analyticsError) throw analyticsError;

      // Fetch top referrers
      const { data: referrers, error: referrersError } = await supabase
        .from('content_referrers')
        .select('source, count')
        .eq('post_id', postId)
        .order('count', { ascending: false })
        .limit(5);

      if (referrersError) throw referrersError;

      // Fetch device breakdown
      const { data: devices, error: devicesError } = await supabase
        .from('content_devices')
        .select('device_type, count')
        .eq('post_id', postId);

      if (devicesError) throw devicesError;

      interface DeviceData {
        device_type: string;
        count: number;
      }

      // Calculate device percentages
      const totalDeviceViews = devices.reduce((sum: number, { count }: DeviceData) => sum + count, 0);
      const deviceBreakdown = devices.map(({ device_type, count }: DeviceData) => ({
        device: device_type,
        percentage: (count / totalDeviceViews) * 100
      }));

      // Fetch trends data (last 30 days)
      const { data: trends, error: trendsError } = await supabase
        .from('content_analytics_daily')
        .select('date, views')
        .eq('post_id', postId)
        .gte('date', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())
        .order('date', { ascending: true });

      if (trendsError) throw trendsError;

      return {
        totalViews: analytics.views,
        totalUniqueVisitors: analytics.unique_visitors,
        avgTimeOnPage: analytics.avg_time_on_page,
        avgBounceRate: analytics.bounce_rate,
        totalLikes: analytics.likes,
        totalShares: analytics.shares,
        avgClickThroughRate: analytics.click_through_rate,
        topReferrers: referrers,
        deviceBreakdown,
        trendsData: trends
      };

    } catch (error) {
      console.error('Error fetching analytics summary:', error);
      return null;
    }
  }

  async getAuditLog(postId: string): Promise<AuditLogEntry[]> {
    try {
      const { data, error } = await supabase
        .from('content_audit_log')
        .select(`
          id,
          action,
          changes,
          created_at,
          profiles:actor_id (name)
        `)
        .eq('post_id', postId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      interface AuditLogData {
        id: string;
        action: AuditLogEntry['action'];
        created_at: string;
        changes?: AuditLogEntry['changes'];
        profiles?: { name: string | null };
      }

      return data.map((entry: AuditLogData) => ({
        id: entry.id,
        action: entry.action,
        createdAt: entry.created_at,
        actorName: entry.profiles?.name,
        changes: entry.changes
      }));

    } catch (error) {
      console.error('Error fetching audit log:', error);
      return [];
    }
  }

  private detectDeviceType(): string {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  // Helper method to track social interactions
  async trackSocialInteraction(postId: string, type: 'like' | 'share') {
    try {
      const updates = type === 'like' 
        ? { likes: supabase.rpc('increment') }
        : { shares: supabase.rpc('increment') };

      const { error } = await supabase
        .from('content_analytics')
        .update(updates)
        .eq('post_id', postId);

      if (error) {
        console.error(`Error tracking ${type}:`, error);
      }
    } catch (error) {
      console.error(`Error in track${type.charAt(0).toUpperCase() + type.slice(1)}:`, error);
    }
  }
}

export const contentAnalyticsService = new ContentAnalyticsService();
