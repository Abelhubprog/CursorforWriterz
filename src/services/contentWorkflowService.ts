import { supabase } from '@/lib/supabase';
import { 
  ContentRevision, 
  ContentWorkflow, 
  WorkflowTemplate,
  MediaAsset,
  SeoTemplate,
  User
} from '@/types/admin';
import { v4 as uuidv4 } from 'uuid';
import { uploadAndOptimizeImage } from '@/utils/mediaUtils';
import { generateStructuredData } from '@/utils/seoUtils';

interface RevisionData {
  id: string;
  post_id: string;
  content: string;
  content_blocks: any[] | null;
  changed_at: string;
  version: number;
  comment: string | null;
  profiles: {
    id: string;
    name: string;
  };
}

interface MediaAssetData {
  id: string;
  title: string;
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  thumbnail_url: string | null;
  file_size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  duration?: number;
  format: string;
  alt: string | null;
  caption: string | null;
  tags: string[];
  folder: string | null;
  metadata?: Record<string, any>;
  optimized_versions?: Record<string, {
    url: string;
    width: number;
    height: number;
    fileSize: number;
  }>;
  uploaded_by: User;
  uploaded_at: string;
  created_at: string;
  updated_at: string;
}

interface SeoTemplateData {
  id: string;
  name: string;
  title_pattern: string;
  description_pattern: string;
  keywords_pattern: string | null;
  og_image_pattern: string | null;
  structured_data_template: Record<string, any> | null;
  applies_to?: {
    services?: string[];
    categories?: string[];
  };
  created_at: string;
  updated_at: string;
}

/**
 * Content Workflow Service
 * Handles content revision tracking, workflow management, media assets, and SEO
 */
export const contentWorkflowService = {
  // ... previous methods remain unchanged ...

  async getMediaAssets(params?: {
    type?: string[];
    folder?: string;
    tags?: string[];
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<{ assets: MediaAsset[]; total: number }> {
    const {
      type,
      folder,
      tags,
      search,
      page = 1,
      limit = 20
    } = params || {};

    let query = supabase
      .from('media_assets')
      .select('*, uploaded_by:profiles!uploaded_by(id, name)', { count: 'exact' });

    if (type?.length) {
      query = query.in('type', type);
    }

    if (folder) {
      query = query.eq('folder', folder);
    }

    if (tags?.length) {
      query = query.overlaps('tags', tags);
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,alt.ilike.%${search}%,caption.ilike.%${search}%`);
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Error fetching media assets:', error);
      throw new Error('Failed to fetch media assets');
    }

    const assets = data?.map((item: MediaAssetData) => ({
      ...item,
      uploadedBy: item.uploaded_by,
      fileSize: item.file_size,
      thumbnailUrl: item.thumbnail_url || undefined,
      optimizedVersions: item.optimized_versions || undefined
    })) || [];

    return {
      assets,
      total: count || 0
    };
  },

  async getSeoTemplates(params?: {
    service?: string;
    category?: string;
  }): Promise<SeoTemplate[]> {
    let query = supabase
      .from('seo_templates')
      .select('*');

    if (params?.service || params?.category) {
      query = query.or(`applies_to->>'services'.cs.{${params.service}},applies_to->>'categories'.cs.{${params.category}}`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching SEO templates:', error);
      throw new Error('Failed to fetch SEO templates');
    }

    return (data as SeoTemplateData[]).map(template => ({
      id: template.id,
      name: template.name,
      titlePattern: template.title_pattern,
      descriptionPattern: template.description_pattern,
      keywordsPattern: template.keywords_pattern || undefined,
      ogImagePattern: template.og_image_pattern || undefined,
      structuredDataTemplate: template.structured_data_template || undefined,
      appliesTo: template.applies_to,
      createdAt: template.created_at,
      updatedAt: template.updated_at
    }));
  },

  // ... rest of the methods remain unchanged ...
};

export default contentWorkflowService;
