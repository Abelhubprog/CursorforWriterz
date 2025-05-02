export interface Service {
  id: string;
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  service: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string | null;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  contentBlocks?: ContentBlock[];
  service: string;
  category?: string;
  status: 'draft' | 'review' | 'approved' | 'published' | 'archived' | 'scheduled';
  publishedAt?: string | null;
  scheduledFor?: string | null;
  createdAt: string;
  updatedAt: string;
  author: Author;
  featuredImage?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  mediaType?: 'image' | 'video' | 'audio' | null;
  mediaUrl?: string;
  featured?: boolean;
  readTime: number;
}

export interface ContentBlock {
  id?: string;
  type: 'text' | 'image' | 'video' | 'code' | 'heading' | 'list' | 'quote' | 'divider';
  content: string;
  language?: string;
  level?: number;
  caption?: string;
  url?: string;
  metadata?: Record<string, any>;
}
