import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import initDatabase from '@/lib/initDatabase';

type SupabaseContextType = {
  supabase: SupabaseClient<Database>;
  loading: boolean;
  error: Error | null;
  initialized: boolean;
};

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize and test connection - simplified version
    const initSupabase = async () => {
      try {
        setLoading(true);
        
        // Simple session check without table queries
        await supabase.auth.getSession();
        
        // Skip detailed database initialization to prevent errors
        console.log('Skipping detailed database schema initialization...');
        setInitialized(true);
        
        // If we get here, basic connection is working
        console.log('Supabase connection established');
      } catch (err) {
        console.error('Supabase provider error:', err);
        if (err instanceof Error) {
          setError(err);
        }
        // Even if there's an error, still mark as initialized to allow app to function
        setInitialized(true);
      } finally {
        setLoading(false);
      }
    };

    initSupabase();
  }, []);

  // Set up auth state change listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: string, session: any) => {
      console.log('Auth state changed:', event, session ? 'Session exists' : 'No session');
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabase, loading, error, initialized }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};
