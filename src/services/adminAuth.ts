import { supabase } from '../lib/supabase';

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
}

export const adminAuth = {
  // Check if user is an admin
  isAdmin: async (userId: string): Promise<boolean> => {
    if (!userId) return false;
    
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();
      
      if (error) throw error;
      return !!data;
    } catch (error) {
      console.error('Admin check failed:', error);
      return false;
    }
  },
  
  // Get admin user details
  getAdmin: async (userId: string): Promise<AdminUser | null> => {
    if (!userId) return null;
    
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      
      if (error) throw error;
      return data as AdminUser;
    } catch (error) {
      console.error('Get admin failed:', error);
      return null;
    }
  },
  
  // Add a new admin user
  addAdmin: async (email: string, role: string = 'editor'): Promise<AdminUser | null> => {
    try {
      // Check if user exists in auth system
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      
      if (userError) throw userError;
      if (!userData) throw new Error('User not found');
      
      // Add admin record
      const { data, error } = await supabase
        .from('admin_users')
        .insert({
          user_id: userData.id,
          email,
          role,
          created_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      return data as AdminUser;
    } catch (error) {
      console.error('Add admin failed:', error);
      return null;
    }
  },
  
  // Remove admin privileges
  removeAdmin: async (userId: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('user_id', userId);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Remove admin failed:', error);
      return false;
    }
  }
}; 