import { createServerClient } from '@supabase/ssr';
import type { Database } from '../types/database.types';
import { CookieOptions } from '@supabase/ssr';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

const cookieOptions: CookieOptions = {
  name: 'sb-session',
  domain: process.env.DOMAIN || 'localhost',
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7 // 7 days
};

export function createClient(accessToken?: string) {
  const client = createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get: (name: string) => '',
        set: (name: string, value: string, options: CookieOptions) => {},
        remove: (name: string, options: CookieOptions) => {}
      },
      cookieOptions,
      auth: {
        persistSession: false
      },
      global: {
        headers: accessToken ? {
          Authorization: `Bearer ${accessToken}`
        } : {}
      }
    }
  );

  return client;
}
