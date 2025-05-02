import { supabase } from '@/lib/supabase';
import type { Post, ContentBlock, Service, Category } from '@/types/admin';
import { Database } from '@/types/supabase';
import { v4 as uuidv4 } from 'uuid';
import { calculateReadTime } from '@/utils/formatters';
import { serviceModel } from './serviceModel';

/**
 * Content Service
 * Handles content operations with Supabase
 */
export const contentService = {
  /**
   * Fetch all content with pagination
   */
  async getPosts(options: {
    page?: number;
    limit?: number;
    service?: string;
    category?: string;
    status?: string;
    search?: string;
  } = {}) {
    const {
      page = 1,
      limit = 10,
      service,
      category,
      status,
      search
    } = options;

    let query = supabase
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
      `);
    
    // Apply filters
    if (service) {
      query = query.eq('services.slug', service);
    }

    if (category) {
      query = query.contains('categories', [category]);
    }

    if (status) {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.textSearch('search_vector', search);
    }

    // Get total count for pagination
    const { count } = await supabase
      .from('content')
      .select('id', { count: 'exact', head: true });

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    
    const { data, error } = await query
      .order('created_at', { ascending: false })
      .range(from, to);
    
    if (error) {
      console.error('Error fetching content:', error);
      throw new Error('Failed to fetch content');
    }

    // Transform data to match our Post interface
    const posts = (data || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      contentBlocks: item.content_blocks,
      service: item.services.slug,
      category: item.categories?.[0],
      status: item.status,
      publishedAt: item.published_at,
      scheduledFor: item.metadata?.scheduled_for,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      featuredImage: item.featured_image,
      tags: item.tags,
      seoTitle: item.seo_title,
      seoDescription: item.seo_description,
      seoKeywords: item.metadata?.seo_keywords,
      mediaType: item.metadata?.media_type,
      mediaUrl: item.metadata?.media_url,
      featured: item.metadata?.featured || false,
      readTime: this.calculateReadTime(item.content || ''),
      author: item.profiles ? {
        id: item.profiles.id,
        name: item.profiles.name || 'Unknown Author',
        avatar: item.profiles.avatar_url
      } : {
        id: item.author_id,
        name: 'Unknown Author',
        avatar: null
      }
    }));
    
    return {
      posts,
      total: count || 0
    };
  },
  
  /**
   * Fetch a single post by ID
   */
  async getPost(id: string): Promise<Post> {
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
      throw new Error('Failed to fetch post');
    }

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      contentBlocks: data.content_blocks,
      service: data.services.slug,
      category: data.categories?.[0],
      status: data.status,
      publishedAt: data.published_at,
      scheduledFor: data.metadata?.scheduled_for,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      featuredImage: data.featured_image,
      tags: data.tags,
      seoTitle: data.seo_title,
      seoDescription: data.seo_description,
      seoKeywords: data.metadata?.seo_keywords,
      mediaType: data.metadata?.media_type,
      mediaUrl: data.metadata?.media_url,
      featured: data.metadata?.featured || false,
      readTime: this.calculateReadTime(data.content || ''),
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
   * Get services
   */
  async getServices(service?: string): Promise<Service[]> {
    let query = supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (service) {
      query = query.eq('slug', service);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching services:', error);
      throw new Error('Failed to fetch services');
    }

    return data.map((service: {
      id: string;
      title: string;
      slug: string;
      description: string | null;
      icon: string | null;
      color: string | null;
      sort_order: number;
      is_active: boolean;
    }) => ({
      id: service.id,
      title: service.title,
      slug: service.slug,
      description: service.description,
      icon: service.icon,
      color: service.color,
      sortOrder: service.sort_order,
      isActive: service.is_active
    }));
  },

  /**
   * Delete a post
   */
  async deletePost(id: string): Promise<void> {
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting post:', error);
      throw new Error('Failed to delete post');
    }
  },

  /**
   * Calculate read time in minutes based on content length
   */
  calculateReadTime(content: string): number {
    if (!content) return 1;
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(1, minutes);
  },

  /**
   * Create a new post
   */
  async createPost(post: Partial<Post>): Promise<{ id: string }> {
    const now = new Date().toISOString();
    const { status, scheduledFor } = post;
    const publishedAt = status === 'published' ? now : null;

    // Get the service ID from the service slug
    const { data: serviceData } = await supabase
      .from('services')
      .select('id')
      .eq('slug', post.service)
      .single();

    if (!serviceData) {
      throw new Error('Invalid service');
    }

    const postData = {
      id: uuidv4(),
      service_id: serviceData.id,
      title: post.title || 'Untitled',
      slug: post.slug || this.createSlug(post.title || 'untitled'),
      content: post.content || '',
      content_blocks: post.contentBlocks || [],
      excerpt: post.excerpt || '',
      featured_image: post.featuredImage,
      seo_title: post.seoTitle,
      seo_description: post.seoDescription,
      tags: post.tags || [],
      categories: post.category ? [post.category] : [],
      author_id: (await supabase.auth.getUser()).data.user?.id,
      status: post.status || 'draft',
      published_at: publishedAt,
      metadata: {
        scheduled_for: scheduledFor,
        featured: post.featured || false,
        seo_keywords: post.seoKeywords,
        media_type: post.mediaType,
        media_url: post.mediaUrl
      }
    };

    const { data, error } = await supabase
      .from('content')
      .insert(postData)
      .select('id')
      .single();

    if (error) {
      console.error('Error creating post:', error);
      throw new Error('Failed to create post');
    }

    return { id: data.id };
  },

  /**
   * Update an existing post
   */
  async updatePost(id: string, post: Partial<Post>): Promise<void> {
    const now = new Date().toISOString();
    const { status, scheduledFor, publishedAt } = post;
    
    // Only update publishedAt if status is changing to published and it's not already set
    const newPublishedAt = status === 'published' && !publishedAt ? now : publishedAt;

    // Get the service ID if service is being updated
    let serviceId;
    if (post.service) {
      const { data: serviceData } = await supabase
        .from('services')
        .select('id')
        .eq('slug', post.service)
        .single();

      if (!serviceData) {
        throw new Error('Invalid service');
      }
      serviceId = serviceData.id;
    }

    const postData = {
      ...(serviceId && { service_id: serviceId }),
      title: post.title,
      slug: post.slug,
      content: post.content,
      content_blocks: post.contentBlocks,
      excerpt: post.excerpt,
      featured_image: post.featuredImage,
      seo_title: post.seoTitle,
      seo_description: post.seoDescription,
      tags: post.tags,
      categories: post.category ? [post.category] : undefined,
      status: status,
      published_at: newPublishedAt,
      updated_at: now,
      metadata: {
        scheduled_for: scheduledFor,
        featured: post.featured,
        seo_keywords: post.seoKeywords,
        media_type: post.mediaType,
        media_url: post.mediaUrl
      }
    };

    // Filter out undefined values
    const filteredPostData = Object.entries(postData)
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const { error } = await supabase
      .from('content')
      .update(filteredPostData)
      .eq('id', id);

    if (error) {
      console.error('Error updating post:', error);
      throw new Error('Failed to update post');
    }
  },

  /**
   * Upload an image to Supabase storage
   */
  async uploadImage(file: File, service: string = 'general'): Promise<{ url: string }> {
    if (!file) throw new Error('No file provided');
    
    // Create a unique file name to prevent collisions
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${service}/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('content-images')
      .upload(filePath, file);
    
    if (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
    
    const { data: { publicUrl } } = supabase.storage
      .from('content-images')
      .getPublicUrl(filePath);
    
    return { url: publicUrl };
  },

  /**
   * Create a URL-friendly slug from text
   */
  createSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .trim();
  },

  /**
   * Get content categories
   */
  async getCategories(service?: string): Promise<Category[]> {
    let query = supabase
      .from('categories')
      .select(`
        id,
        name,
        slug,
        description,
        sort_order,
        is_active,
        service_id,
        services!inner (
          id,
          title,
          slug
        )
      `)
      .order('sort_order', { ascending: true });

    if (service) {
      query = query.eq('services.slug', service);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }

    return data.map((category: {
      id: string;
      name: string;
      slug: string;
      description: string | null;
      sort_order: number;
      is_active: boolean;
      services: {
        id: string;
        title: string;
        slug: string;
      };
    }) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      service: category.services.slug,
      sortOrder: category.sort_order,
      isActive: category.is_active
    }));
  },

  /**
   * Create a new category
   */
  async createCategory(categoryData: {
    name: string;
    slug?: string;
    description?: string;
    service: string;
  }): Promise<{ id: string }> {
    // Get service ID from service slug
    const { data: serviceData } = await supabase
      .from('services')
      .select('id')
      .eq('slug', categoryData.service)
      .single();

    if (!serviceData) {
      throw new Error('Invalid service');
    }

    const { data, error } = await supabase
      .from('categories')
      .insert({
        name: categoryData.name,
        slug: categoryData.slug || this.createSlug(categoryData.name),
        description: categoryData.description || '',
        service_id: serviceData.id
      })
      .select('id')
      .single();

    if (error) {
      console.error('Error creating category:', error);
      throw new Error('Failed to create category');
    }

    return { id: data.id };
  },

  /**
   * Update a category
   */
  async updateCategory(id: string, categoryData: {
    name?: string;
    slug?: string;
    description?: string;
    service?: string;
  }): Promise<void> {
    let serviceId;
    if (categoryData.service) {
      const { data: serviceData } = await supabase
        .from('services')
        .select('id')
        .eq('slug', categoryData.service)
        .single();

      if (!serviceData) {
        throw new Error('Invalid service');
      }
      serviceId = serviceData.id;
    }

    const updateData = {
      ...categoryData,
      ...(serviceId && { service_id: serviceId }),
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('categories')
      .update(updateData)
      .eq('id', id);

    if (error) {
      console.error('Error updating category:', error);
      throw new Error('Failed to update category');
    }
  },

  /**
   * Delete a category
   */
  async deleteCategory(id: string): Promise<void> {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting category:', error);
      throw new Error('Failed to delete category');
    }
  }
};

export default contentService;
