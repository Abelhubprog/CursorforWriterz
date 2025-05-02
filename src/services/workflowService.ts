import { supabase } from '@/lib/supabase';
import { Post } from '@/types/admin';

export interface WorkflowTransition {
  fromStage: string;
  toStage: string;
  requiredRole: string;
  validationRules: {
    requiredFields?: string[];
    requireComment?: boolean;
    customValidation?: string;
  };
}

export interface WorkflowEvent {
  id: string;
  contentId: string;
  fromStage: string;
  toStage: string;
  userId: string;
  comment?: string;
  createdAt: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const workflowService = {
  /**
   * Get available transitions for the current content stage
   */
  async getAvailableTransitions(contentId: string): Promise<WorkflowTransition[]> {
    // Get current content stage
    const { data: content } = await supabase
      .from('posts')
      .select('status, author_id')
      .eq('id', contentId)
      .single();

    if (!content) {
      throw new Error('Content not found');
    }

    // Get user role
    const { data: userRole } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', supabase.auth.user()?.id)
      .single();

    if (!userRole) {
      throw new Error('User role not found');
    }

    // Get all possible transitions from current stage
    const { data: transitions } = await supabase
      .from('workflow_transitions')
      .select('*')
      .eq('from_stage', content.status);

    // Filter transitions based on user role and permissions
    return (transitions || [])
      .filter(transition => {
        // Admin can do any transition
        if (userRole.role === 'admin') return true;

        // Check if user has required role
        if (transition.required_role === userRole.role) return true;

        // Authors can transition their own content in certain stages
        if (content.author_id === supabase.auth.user()?.id && 
            transition.from_stage === 'draft' && 
            transition.to_stage === 'review') {
          return true;
        }

        return false;
      })
      .map(t => ({
        fromStage: t.from_stage,
        toStage: t.to_stage,
        requiredRole: t.required_role,
        validationRules: t.validation_rules
      }));
  },

  /**
   * Validate content before stage transition
   */
  async validateTransition(
    contentId: string, 
    toStage: string, 
    comment?: string
  ): Promise<ValidationResult> {
    // Get content and transition rules
    const [contentResult, transitionResult] = await Promise.all([
      supabase
        .from('posts')
        .select('*')
        .eq('id', contentId)
        .single(),
      supabase
        .from('workflow_transitions')
        .select('*')
        .eq('from_stage', contentResult.data.status)
        .eq('to_stage', toStage)
        .single()
    ]);

    if (!contentResult.data || !transitionResult.data) {
      return {
        isValid: false,
        errors: ['Invalid transition']
      };
    }

    const content = contentResult.data;
    const transition = transitionResult.data;
    const errors: string[] = [];

    // Check required fields
    if (transition.validation_rules.requiredFields) {
      for (const field of transition.validation_rules.requiredFields) {
        if (!content[field]) {
          errors.push(`${field} is required`);
        }
      }
    }

    // Check if comment is required
    if (transition.validation_rules.requireComment && !comment) {
      errors.push('Comment is required for this transition');
    }

    // Add custom validations here based on transition.validation_rules.customValidation

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  /**
   * Transition content to new stage
   */
  async transitionStage(
    contentId: string, 
    toStage: string, 
    comment?: string
  ): Promise<void> {
    // Validate transition
    const validation = await this.validateTransition(contentId, toStage, comment);
    if (!validation.isValid) {
      throw new Error(`Invalid transition: ${validation.errors.join(', ')}`);
    }

    // Start transaction
    const { error } = await supabase.rpc('transition_content_stage', {
      p_content_id: contentId,
      p_to_stage: toStage,
      p_comment: comment || null
    });

    if (error) {
      console.error('Error transitioning stage:', error);
      throw new Error('Failed to transition stage');
    }
  },

  /**
   * Get workflow history for content
   */
  async getWorkflowHistory(contentId: string): Promise<WorkflowEvent[]> {
    const { data, error } = await supabase
      .from('content_workflow')
      .select(`
        id,
        content_id,
        from_stage,
        to_stage,
        comment,
        created_at,
        assigned_to,
        profiles:assigned_to (
          id,
          full_name,
          avatar_url
        )
      `)
      .eq('content_id', contentId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching workflow history:', error);
      throw new Error('Failed to fetch workflow history');
    }

    return data.map(event => ({
      id: event.id,
      contentId: event.content_id,
      fromStage: event.from_stage,
      toStage: event.to_stage,
      userId: event.assigned_to,
      comment: event.comment,
      createdAt: event.created_at,
      user: event.profiles
    }));
  },

  /**
   * Get content requiring attention
   * (e.g., items pending review for editors)
   */
  async getContentRequiringAttention(): Promise<Post[]> {
    const { data: userRole } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', supabase.auth.user()?.id)
      .single();

    if (!userRole) {
      throw new Error('User role not found');
    }

    let query = supabase
      .from('posts')
      .select(`
        id,
        title,
        status,
        author_id,
        updated_at,
        profiles:author_id (
          id,
          full_name,
          avatar_url
        )
      `);

    // Filter based on role
    if (userRole.role === 'editor') {
      query = query.eq('status', 'review');
    } else if (userRole.role === 'author') {
      query = query
        .eq('author_id', supabase.auth.user()?.id)
        .in('status', ['draft', 'review']);
    }

    const { data, error } = await query
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching content requiring attention:', error);
      throw new Error('Failed to fetch content requiring attention');
    }

    return data;
  },

  /**
   * Assign content to user
   */
  async assignContent(
    contentId: string,
    userId: string,
    comment?: string
  ): Promise<void> {
    const { error } = await supabase
      .from('content_workflow')
      .upsert({
        content_id: contentId,
        assigned_to: userId,
        comment,
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error assigning content:', error);
      throw new Error('Failed to assign content');
    }
  },

  /**
   * Get assigned content for current user
   */
  async getAssignedContent(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        status,
        author_id,
        updated_at,
        profiles:author_id (
          id,
          full_name,
          avatar_url
        )
      `)
      .eq('assigned_to', supabase.auth.user()?.id)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching assigned content:', error);
      throw new Error('Failed to fetch assigned content');
    }

    return data;
  }
};

export default workflowService;
