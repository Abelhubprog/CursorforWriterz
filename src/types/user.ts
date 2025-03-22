import { User as ClerkUser } from '@clerk/clerk-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

export interface ExtendedUser extends Omit<ClerkUser, 'id'> {
  id: string;
  displayName?: string;
  photoURL?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
    [key: string]: any;
  };
  created_at?: string;
  email?: string;
  role?: string;
}

export type User = ExtendedUser;

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export type UserRole = 'admin' | 'user' | 'moderator';

export interface AdminUser extends Omit<Author, 'role'> {
  role: UserRole;
  email: string;
  permissions?: string[];
} 