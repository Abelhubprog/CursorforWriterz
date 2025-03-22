import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get current session on mount
    const getCurrentUser = async () => {
      try {
        setIsLoading(true);
        
        // Check for existing session
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        
        if (currentSession?.user) {
          // Fetch user profile data
          const { data: profile } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', currentSession.user.id)
            .single();
          
          setUser({
            id: currentSession.user.id,
            email: currentSession.user.email || '',
            name: profile?.full_name || 'User',
            avatarUrl: profile?.avatar_url
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown authentication error'));
        console.error('Auth error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getCurrentUser();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession);
      
      if (event === 'SIGNED_IN' && newSession?.user) {
        // Fetch user profile data when signed in
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', newSession.user.id)
          .single();
        
        setUser({
          id: newSession.user.id,
          email: newSession.user.email || '',
          name: profile?.full_name || 'User',
          avatarUrl: profile?.avatar_url
        });
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setSession(null);
      }
    });

    // Cleanup subscription
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign in'));
      console.error('Sign-in error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithMagicLink = async (email: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) throw error;
      return { success: true, message: "Magic link sent to your email" };
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send magic link'));
      console.error('Magic link error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      
      // Create auth user
      const { data, error } = await supabase.auth.signUp({ email, password });
      
      if (error) throw error;
      
      if (data.user) {
        // Create user profile
        await supabase.from('user_profiles').insert([
          {
            id: data.user.id,
            full_name: name,
            email
          }
        ]);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign up'));
      console.error('Sign-up error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign out'));
      console.error('Sign-out error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) throw error;
      return { success: true, message: "Password updated successfully" };
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update password'));
      console.error('Password update error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    session,
    isLoading,
    error,
    signIn,
    signUp,
    logout,
    signInWithMagicLink,
    updatePassword,
    isAdmin: user?.email?.includes('admin') || false
  };
};
