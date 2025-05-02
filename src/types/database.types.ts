export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      content: {
        Row: {
          id: string
          title: string
          slug: string | null
          content: string | null
          content_blocks: Json | null
          excerpt: string | null
          featured_image: string | null
          seo_title: string | null
          seo_description: string | null
          tags: string[] | null
          categories: string[] | null
          author_id: string
          service_id: string | null
          status: 'draft' | 'review' | 'scheduled' | 'published' | 'archived'
          published_at: string | null
          metadata: Json | null
          search_vector: unknown | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug?: string | null
          content?: string | null
          content_blocks?: Json | null
          excerpt?: string | null
          featured_image?: string | null
          seo_title?: string | null
          seo_description?: string | null
          tags?: string[] | null
          categories?: string[] | null
          author_id: string
          service_id?: string | null
          status?: 'draft' | 'review' | 'scheduled' | 'published' | 'archived'
          published_at?: string | null
          metadata?: Json | null
          search_vector?: unknown | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string | null
          content?: string | null
          content_blocks?: Json | null
          excerpt?: string | null
          featured_image?: string | null
          seo_title?: string | null
          seo_description?: string | null
          tags?: string[] | null
          categories?: string[] | null
          author_id?: string
          service_id?: string | null
          status?: 'draft' | 'review' | 'scheduled' | 'published' | 'archived'
          published_at?: string | null
          metadata?: Json | null
          search_vector?: unknown | null
          created_at?: string
          updated_at?: string
        }
      }
      content_metrics: {
        Row: {
          id: string
          content_id: string
          views_count: number
          unique_views_count: number
          likes_count: number
          shares_count: number
          avg_time_spent: string | null
          bounce_rate: number | null
          metadata: Json | null
          last_updated: string
        }
        Insert: {
          id?: string
          content_id: string
          views_count?: number
          unique_views_count?: number
          likes_count?: number
          shares_count?: number
          avg_time_spent?: string | null
          bounce_rate?: number | null
          metadata?: Json | null
          last_updated?: string
        }
        Update: {
          id?: string
          content_id?: string
          views_count?: number
          unique_views_count?: number
          likes_count?: number
          shares_count?: number
          avg_time_spent?: string | null
          bounce_rate?: number | null
          metadata?: Json | null
          last_updated?: string
        }
      }
      content_reviews: {
        Row: {
          id: string
          content_id: string
          reviewer_id: string
          status: string
          feedback: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content_id: string
          reviewer_id: string
          status?: string
          feedback?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content_id?: string
          reviewer_id?: string
          status?: string
          feedback?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      content_versions: {
        Row: {
          id: string
          content_id: string
          version_number: number
          title: string
          content: string | null
          content_blocks: Json | null
          metadata: Json | null
          created_by: string
          created_at: string
        }
        Insert: {
          id?: string
          content_id: string
          version_number: number
          title: string
          content?: string | null
          content_blocks?: Json | null
          metadata?: Json | null
          created_by: string
          created_at?: string
        }
        Update: {
          id?: string
          content_id?: string
          version_number?: number
          title?: string
          content?: string | null
          content_blocks?: Json | null
          metadata?: Json | null
          created_by?: string
          created_at?: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          description: string | null
          slug: string
          icon: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          slug: string
          icon?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          slug?: string
          icon?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_unique_slug: {
        Args: {
          title: string
        }
        Returns: string
      }
      publish_content: {
        Args: {
          content_id: string
        }
        Returns: void
      }
      revert_to_version: {
        Args: {
          p_content_id: string
          p_version_number: number
        }
        Returns: void
      }
      schedule_content_publishing: {
        Args: {
          p_content_id: string
          p_publish_at: string
          p_unpublish_at?: string
          p_timezone?: string
          p_recurring_pattern?: Json
        }
        Returns: string
      }
      start_content_review: {
        Args: {
          p_content_id: string
          p_reviewer_id?: string
          p_due_date?: string
        }
        Returns: string
      }
      track_content_engagement: {
        Args: {
          p_content_id: string
          p_event_type: string
          p_session_id: string
          p_device_info?: Json
          p_referrer?: string
          p_duration?: string
          p_metadata?: Json
        }
        Returns: void
      }
    }
    Enums: {
      content_status: 'draft' | 'review' | 'scheduled' | 'published' | 'archived'
    }
  }
}
