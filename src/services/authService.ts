
import { toast } from 'react-hot-toast';
import { supabase } from '@/utils/supabase';
import { User, AuthError, Session, UserResponse } from '@supabase/supabase-js';

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  role: 'admin' | 'editor' | 'user';
  avatarUrl: string | null;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string | null;
}

export const authService = {
  /**
   * Sign in with email and password and get user profile
   */
  async signIn(email: string, password: string) {
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (user) {
        // Get user profile with role information
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;

        return {
          id: user.id,
          email: user.email!,
          name: profile?.display_name || user.email?.split('@')[0],
          role: profile?.role || 'user',
          avatarUrl: profile?.avatar_url,
          status: profile?.status || 'active',
          lastLogin: user.last_sign_in_at,
        } as AuthUser;
      }

      return null;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  },

  /**
   * Reset password with email
   */
  async resetPassword(email: string) {
    return supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });
  },

  /**
   * Update user password
   */
  async updatePassword(password: string) {
    return supabase.auth.updateUser({ password });
  },

  /**
   * Update user profile
   */
  async updateProfile(userId: string, data: Partial<AuthUser>) {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: data.name,
          avatar_url: data.avatarUrl,
          status: data.status,
          role: data.role,
        })
        .eq('id', userId);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    }
  },
};
