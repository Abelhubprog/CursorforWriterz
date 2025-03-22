import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

// Get environment variables with proper error handling and fallbacks
function getSupabaseConfig() {
  // Use environment variables or fallbacks
  const url = import.meta.env.VITE_SUPABASE_URL || 'https://thvgjcnrlfofioagjydk.supabase.co';
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodmdqY25ybGZvZmlvYWdqeWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNjYzMDAsImV4cCI6MjA1Njg0MjMwMH0.OmWI-itN_xok_fKFxfID1ew7sKO843-jsylapBCqvvg';
  
  return { url, key };
}

// Create a function to initialize the client
function createSupabaseClient() {
  try {
    const { url, key } = getSupabaseConfig();
    
    // Create and return the client
    return createClient<Database>(url, key, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storageKey: 'handywriterz-auth-token'
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      },
      global: {
        headers: {
          'x-application-name': 'handywriterz-admin'
        }
      }
    });
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    
    // Return a dummy client that throws errors for all operations in development
    // or silently fails in production to keep the app running
    if (import.meta.env.DEV) {
      return new Proxy({} as any, {
        get: () => () => {
          throw new Error('Supabase client not properly initialized. Check your environment variables.');
        }
      });
    } else {
      // In production, return a mock client that silently fails
      // This allows the app to load even if Supabase is not properly configured
      return new Proxy({} as any, {
        get: () => () => {
          console.error('Supabase client not properly initialized in production');
          return null;
        }
      });
    }
  }
}

// Initialize and export the client
export const supabase = createSupabaseClient();

// Export type helper
export type SupabaseClient = ReturnType<typeof createSupabaseClient>;

// Export database type
export type { Database };

// Auth helpers
export const signUp = async ({ email, password }: { email: string; password: string }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async ({ email, password }: { email: string; password: string }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  return { data, error };
};

export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  return { data, error };
};

// Storage helpers
export const uploadFile = async (bucket: string, path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  return { data, error };
};

export const getPublicUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  return data.publicUrl;
};

export const deleteFile = async (bucket: string, path: string) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);
  return { error };
};

// Database helpers
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateProfile = async (userId: string, updates: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);
  return { data, error };
};

// Realtime subscription helper
export const subscribeToChanges = (
  table: string,
  callback: (payload: any) => void
) => {
  return supabase
    .channel('db_changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table },
      callback
    )
    .subscribe();
};

export default supabase;
