import { supabase } from '@/lib/supabase';
import type { Post, ContentBlock, Service, Category } from '@/types/admin';
import { v4 as uuidv4 } from 'uuid';
import { slugify } from '@/utils/formatters';

/**
 * Admin Content Service
 * Handles content operations with Supabase for admin users
 */
export const adminContentService = {
  /**
   * Fetch a single post by ID
   */
  async getPost(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('content')
      .select(`
        *,
        services!inner (
          id,
          title,
          slug
        ),
        profiles!author_id (
          id,
          name,
          avatar_url
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || '',
      content: data.content,
      contentBlocks: data.content_blocks || [],
      service: data.services.slug,
      category: data.categories?.[0] || '',
      status: data.status,
      publishedAt: data.published_at,
      scheduledFor: data.metadata?.scheduled_for,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      featuredImage: data.featured_image,
      tags: data.tags || [],
      seoTitle: data.seo_title || '',
      seoDescription: data.seo_description || '',
      seoKeywords: data.metadata?.seo_keywords || [],
      author: data.profiles ? {
        id: data.profiles.id,
        name: data.profiles.name || 'Unknown Author',
        avatar: data.profiles.avatar_url
      } : {
        id: data.author_id,
        name: 'Unknown Author',
        avatar: null
      }
    };
  },

  /**
   * Create a new post
   */
  async createPost(post: Partial<Post>, userId: string): Promise<{ id: string } | null> {
    // Generate slug if not provided
    const slug = post.slug || slugify(post.title || '');
    
    const contentData = {
      title: post.title,
      slug,
      excerpt: post.excerpt || '',
      content: post.content || '',
      content_blocks: post.contentBlocks || [],
      service_id: post.service ? await this.getServiceIdBySlug(post.service) : null,
      categories: post.category ? [post.category] : [],
      status: post.status || 'draft',
      published_at: post.status === 'published' ? new Date().toISOString() : null,
      author_id: userId,
      featured_image: post.featuredImage || null,
      tags: post.tags || [],
      seo_title: post.seoTitle || post.title,
      seo_description: post.seoDescription || post.excerpt,
      metadata: {
        scheduled_for: post.scheduledFor || null,
        seo_keywords: post.seoKeywords || [],
      }
    };
    
    const { data, error } = await supabase
      .from('content')
      .insert(contentData)
      .select('id')
      .single();
      
    if (error) {
      console.error('Error creating post:', error);
      return null;
    }
    
    return { id: data.id };
  },
  
  /**
   * Update an existing post
   */
  async updatePost(id: string, post: Partial<Post>): Promise<boolean> {
    const updates: any = {};
    
    if (post.title !== undefined) updates.title = post.title;
    if (post.slug !== undefined) updates.slug = post.slug;
    if (post.excerpt !== undefined) updates.excerpt = post.excerpt;
    if (post.content !== undefined) updates.content = post.content;
    if (post.contentBlocks !== undefined) updates.content_blocks = post.contentBlocks;
    if (post.status !== undefined) {
      updates.status = post.status;
      if (post.status === 'published' && !post.publishedAt) {
        updates.published_at = new Date().toISOString();
      }
    }
    if (post.service !== undefined) {
      updates.service_id = await this.getServiceIdBySlug(post.service);
    }
    if (post.category !== undefined) {
      updates.categories = post.category ? [post.category] : [];
    }
    if (post.featuredImage !== undefined) updates.featured_image = post.featuredImage;
    if (post.tags !== undefined) updates.tags = post.tags;
    if (post.seoTitle !== undefined) updates.seo_title = post.seoTitle;
    if (post.seoDescription !== undefined) updates.seo_description = post.seoDescription;
    
    // Handle metadata fields
    const { data: existingPost } = await supabase
      .from('content')
      .select('metadata')
      .eq('id', id)
      .single();
      
    const metadata = existingPost?.metadata || {};
    
    if (post.scheduledFor !== undefined) metadata.scheduled_for = post.scheduledFor;
    if (post.seoKeywords !== undefined) metadata.seo_keywords = post.seoKeywords;
    
    updates.metadata = metadata;
    
    const { error } = await supabase
      .from('content')
      .update(updates)
      .eq('id', id);
      
    if (error) {
      console.error('Error updating post:', error);
      return false;
    }
    
    return true;
  },
  
  /**
   * Delete a post
   */
  async deletePost(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting post:', error);
      return false;
    }
    
    return true;
  },
  
  /**
   * Get services
   */
  async getServices(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });
      
    if (error) {
      console.error('Error fetching services:', error);
      return [];
    }
    
    return data.map(service => ({
      id: service.id,
      name: service.title,
      slug: service.slug,
      description: service.description || '',
      icon: service.icon || null,
      isActive: service.is_active
    }));
  },
  
  /**
   * Get categories
   */
  async getCategories(service?: string): Promise<Category[]> {
    let query = supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });
      
    if (service) {
      // Get service ID first
      const serviceId = await this.getServiceIdBySlug(service);
      if (serviceId) {
        query = query.eq('service_id', serviceId);
      }
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
    
    return data.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      service: category.service_id
    }));
  },
  
  /**
   * Helper to get service ID by slug
   */
  async getServiceIdBySlug(slug: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('services')
      .select('id')
      .eq('slug', slug)
      .single();
      
    if (error || !data) {
      console.error('Error fetching service ID:', error);
      return null;
    }
    
    return data.id;
  },
  
  /**
   * Upload image to storage
   */
  async uploadImage(file: File, folderPath = 'content'): Promise<string | null> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${folderPath}/${fileName}`;
    
    const { error } = await supabase.storage
      .from('images')
      .upload(filePath, file);
      
    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }
    
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);
      
    return data.publicUrl;
  }
};

export default adminContentService;
