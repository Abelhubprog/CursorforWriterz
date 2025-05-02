import { supabase } from '@/lib/supabase';
import type { ContentReview } from '@/types/admin';

/**
 * Submit content for review
 */
export async function submitForReview(
  contentId: string,
  metadata: {
    submitterNotes?: string;
    priority?: 'low' | 'medium' | 'high';
    requestedReviewers?: string[];
  } = {},
  accessToken: string
) {
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser(accessToken);

  if (userError) {
    throw new Error('Unauthorized');
  }

  // Start a transaction
  const { error: transactionError } = await supabase.rpc('begin_transaction');
  if (transactionError) throw new Error('Failed to start transaction');

  try {
    // Update content status
    const { error: contentError } = await supabase
      .from('content')
      .update({ 
        status: 'review',
        updated_at: new Date().toISOString()
      })
      .eq('id', contentId);

    if (contentError) throw new Error('Failed to update content status');

    // Create workflow record
    const { error: workflowError } = await supabase
      .from('content_workflows')
      .insert({
        post_id: contentId,
        status: 'pending_review',
        assigned_to: metadata.requestedReviewers?.[0],
        review_notes: metadata.submitterNotes,
        metadata: {
          priority: metadata.priority || 'medium',
          requestedReviewers: metadata.requestedReviewers,
          submittedBy: user.id,
          submittedAt: new Date().toISOString()
        }
      });

    if (workflowError) throw new Error('Failed to create workflow');

    // Create notification for reviewers
    if (metadata.requestedReviewers?.length) {
      const notifications = metadata.requestedReviewers.map(reviewerId => ({
        user_id: reviewerId,
        type: 'content_review_request',
        content: {
          contentId,
          submitterId: user.id,
          priority: metadata.priority
        },
        created_at: new Date().toISOString()
      }));

      const { error: notificationError } = await supabase
        .from('notifications')
        .insert(notifications);

      if (notificationError) throw new Error('Failed to create notifications');
    }

    // Commit transaction
    const { error: commitError } = await supabase.rpc('commit_transaction');
    if (commitError) throw new Error('Failed to commit transaction');

    return { success: true };

  } catch (error) {
    // Rollback on error
    await supabase.rpc('rollback_transaction');
    throw error;
  }
}

/**
 * Submit a content review
 */
export async function submitReview(
  contentId: string,
  review: {
    status: 'approved' | 'rejected' | 'changes_requested';
    feedback: string;
    checklistItems?: Record<string, boolean>;
  },
  accessToken: string
) {
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser(accessToken);

  if (userError) {
    throw new Error('Unauthorized');
  }

  // Start transaction
  const { error: transactionError } = await supabase.rpc('begin_transaction');
  if (transactionError) throw new Error('Failed to start transaction');

  try {
    // Create review record
    const { error: reviewError } = await supabase
      .from('content_reviews')
      .insert({
        content_id: contentId,
        reviewer_id: user.id,
        status: review.status,
        feedback: review.feedback,
        checklist_items: review.checklistItems,
        created_at: new Date().toISOString()
      });

    if (reviewError) throw new Error('Failed to create review');

    // Update workflow status
    const { data: workflow } = await supabase
      .from('content_workflows')
      .select('metadata')
      .eq('post_id', contentId)
      .single();

    const { error: workflowError } = await supabase
      .from('content_workflows')
      .update({
        status: review.status === 'approved' ? 'approved' : 'changes_needed',
        reviewed_by: user.id,
        updated_at: new Date().toISOString(),
        metadata: {
          ...workflow?.metadata,
          lastReviewedAt: new Date().toISOString(),
          lastReviewedBy: user.id
        }
      })
      .eq('post_id', contentId);

    if (workflowError) throw new Error('Failed to update workflow');

    // Update content status if approved
    if (review.status === 'approved') {
      const { error: contentError } = await supabase
        .from('content')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', contentId);

      if (contentError) throw new Error('Failed to update content status');
    }

    // Notify content author
    const { data: content } = await supabase
      .from('content')
      .select('author_id')
      .eq('id', contentId)
      .single();

    if (content?.author_id) {
      const { error: notificationError } = await supabase
        .from('notifications')
        .insert({
          user_id: content.author_id,
          type: 'content_review_completed',
          content: {
            contentId,
            reviewerId: user.id,
            status: review.status
          },
          created_at: new Date().toISOString()
        });

      if (notificationError) throw new Error('Failed to create notification');
    }

    // Commit transaction
    const { error: commitError } = await supabase.rpc('commit_transaction');
    if (commitError) throw new Error('Failed to commit transaction');

    return { success: true };

  } catch (error) {
    // Rollback on error
    await supabase.rpc('rollback_transaction');
    throw error;
  }
}

/**
 * Get review history for content
 */
export async function getContentReviews(contentId: string): Promise<ContentReview[]> {
  const { data, error } = await supabase
    .from('content_reviews')
    .select(`
      id,
      content_id,
      reviewer_id,
      status,
      feedback,
      checklist_items,
      created_at,
      profiles:reviewer_id (
        name,
        avatar_url
      )
    `)
    .eq('content_id', contentId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Failed to get content reviews');
  }

  return data.map(review => ({
    id: review.id,
    contentId: review.content_id,
    reviewer: {
      id: review.reviewer_id,
      name: review.profiles?.name || 'Unknown',
      avatar: review.profiles?.avatar_url
    },
    status: review.status,
    feedback: review.feedback,
    checklistItems: review.checklist_items,
    createdAt: review.created_at
  }));
}

/**
 * Get current workflow status
 */
export async function getWorkflowStatus(contentId: string) {
  const { data, error } = await supabase
    .from('content_workflows')
    .select(`
      status,
      assigned_to,
      reviewed_by,
      review_notes,
      next_review_date,
      metadata,
      updated_at,
      profiles:assigned_to (
        name,
        avatar_url
      )
    `)
    .eq('post_id', contentId)
    .single();

  if (error) {
    throw new Error('Failed to get workflow status');
  }

  return {
    status: data.status,
    assignedTo: data.assigned_to ? {
      id: data.assigned_to,
      name: data.profiles?.name || 'Unknown',
      avatar: data.profiles?.avatar_url
    } : null,
    reviewedBy: data.reviewed_by,
    notes: data.review_notes,
    nextReviewDate: data.next_review_date,
    metadata: data.metadata,
    updatedAt: data.updated_at
  };
}
