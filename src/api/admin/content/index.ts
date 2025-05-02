import { createClient } from '../../../lib/supabase.server';
import type { Database } from '../../../types/database.types';

interface ContentCreateParams {
  title: string;
  content: string;
  contentBlocks?: any[];
  excerpt?: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  categories?: string[];
  serviceId?: string;
  status?: Database['public']['Enums']['content_status'];
  metadata?: Record<string, any>;
}

interface ContentUpdateParams extends Partial<ContentCreateParams> {
  id: string;
}

interface ContentScheduleParams {
  contentId: string;
  publishAt: Date;
  unpublishAt?: Date;
  timezone?: string;
  recurringPattern?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    interval?: number;
    endDate?: Date;
  };
}

interface ContentReviewParams {
  contentId: string;
  reviewerId?: string;
  dueDate?: Date;
  metadata?: Record<string, any>;
}

export async function createContent(params: ContentCreateParams, accessToken: string) {
  const supabase = createClient(accessToken);
  
  const { data: content, error: contentError } = await supabase
    .from('content')
    .insert({
      title: params.title,
      content: params.content,
      content_blocks: params.contentBlocks,
      excerpt: params.excerpt,
      featured_image: params.featuredImage,
      seo_title: params.seoTitle,
      seo_description: params.seoDescription,
      tags: params.tags,
      categories: params.categories,
      service_id: params.serviceId,
      status: params.status || 'draft',
      metadata: params.metadata || {}
    })
    .select()
    .single();

  if (contentError) {
    throw new Error(`Error creating content: ${contentError.message}`);
  }

  return content;
}

export async function updateContent(params: ContentUpdateParams, accessToken: string) {
  const supabase = createClient(accessToken);

  const { data: content, error: contentError } = await supabase
    .from('content')
    .update({
      title: params.title,
      content: params.content,
      content_blocks: params.contentBlocks,
      excerpt: params.excerpt,
      featured_image: params.featuredImage,
      seo_title: params.seoTitle,
      seo_description: params.seoDescription,
      tags: params.tags,
      categories: params.categories,
      service_id: params.serviceId,
      status: params.status,
      metadata: params.metadata
    })
    .eq('id', params.id)
    .select()
    .single();

  if (contentError) {
    throw new Error(`Error updating content: ${contentError.message}`);
  }

  return content;
}

export async function scheduleContent(params: ContentScheduleParams, accessToken: string) {
  const supabase = createClient(accessToken);

  const { data, error } = await supabase
    .rpc('schedule_content_publishing', {
      p_content_id: params.contentId,
      p_publish_at: params.publishAt.toISOString(),
      p_unpublish_at: params.unpublishAt?.toISOString(),
      p_timezone: params.timezone || 'UTC',
      p_recurring_pattern: params.recurringPattern
    });

  if (error) {
    throw new Error(`Error scheduling content: ${error.message}`);
  }

  return data;
}

export async function requestContentReview(params: ContentReviewParams, accessToken: string) {
  const supabase = createClient(accessToken);

  const { data, error } = await supabase
    .rpc('start_content_review', {
      p_content_id: params.contentId,
      p_reviewer_id: params.reviewerId,
      p_due_date: params.dueDate?.toISOString()
    });

  if (error) {
    throw new Error(`Error requesting content review: ${error.message}`);
  }

  return data;
}

export async function getContentMetrics(contentId: string, accessToken: string) {
  const supabase = createClient(accessToken);

  // Get content metrics
  const { data: metrics, error: metricsError } = await supabase
    .from('content_metrics')
    .select('*')
    .eq('content_id', contentId)
    .single();

  if (metricsError) {
    throw new Error(`Error fetching content metrics: ${metricsError.message}`);
  }

  // Get content insights
  const { data: insights, error: insightsError } = await supabase
    .from('content_insights')
    .select('*')
    .eq('content_id', contentId);

  if (insightsError) {
    throw new Error(`Error fetching content insights: ${insightsError.message}`);
  }

  return {
    metrics,
    insights: insights || []
  };
}

export async function getContentVersionHistory(contentId: string, accessToken: string) {
  const supabase = createClient(accessToken);

  // Get content versions
  const { data: versions, error: versionsError } = await supabase
    .from('content_versions')
    .select('*')
    .eq('content_id', contentId)
    .order('version_number', { ascending: false });

  if (versionsError) {
    throw new Error(`Error fetching content versions: ${versionsError.message}`);
  }

  // Get content change log
  const { data: changes, error: changesError } = await supabase
    .from('content_change_log')
    .select('*')
    .eq('content_id', contentId)
    .order('created_at', { ascending: false });

  if (changesError) {
    throw new Error(`Error fetching content changes: ${changesError.message}`);
  }

  return {
    versions: versions || [],
    changes: changes || []
  };
}

export async function revertContentVersion(contentId: string, versionNumber: number, accessToken: string) {
  const supabase = createClient(accessToken);

  const { data, error } = await supabase
    .rpc('revert_to_version', {
      p_content_id: contentId,
      p_version_number: versionNumber
    });

  if (error) {
    throw new Error(`Error reverting content version: ${error.message}`);
  }

  return data;
}

export async function getContentWorkflow(contentId: string, accessToken: string) {
  const supabase = createClient(accessToken);

  // Get content workflow status (reviews)
  const { data: reviews, error: reviewsError } = await supabase
    .from('content_reviews')
    .select('*')
    .eq('content_id', contentId)
    .order('created_at', { ascending: false });

  if (reviewsError) {
    throw new Error(`Error fetching content reviews: ${reviewsError.message}`);
  }

  // Get review checklist items for the latest review
  const latestReview = reviews?.[0];
  const { data: checklist, error: checklistError } = latestReview ? await supabase
    .from('review_checklist_items')
    .select('*')
    .eq('review_id', latestReview.id)
    .order('created_at', { ascending: true }) : { data: [], error: null };

  if (checklistError) {
    throw new Error(`Error fetching review checklist: ${checklistError.message}`);
  }

  return {
    reviews: reviews || [],
    currentReview: latestReview || null,
    checklist: checklist || []
  };
}
