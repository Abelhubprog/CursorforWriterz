import { z } from 'zod';

// Define environment schema with Zod
const envSchema = z.object({
  // App
  VITE_APP_NAME: z.string().default('HandyWriterz'),
  VITE_APP_URL: z.string().url().default('http://localhost:5173'),
  
  // API
  VITE_API_URL: z.string().url().default('http://localhost:3000'),
  
  // Supabase
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string(),
  
  // Clerk
  VITE_CLERK_PUBLISHABLE_KEY: z.string(),
  
  // Feature Flags
  VITE_ENABLE_ANALYTICS: z.string().transform(val => val === 'true').default('false'),
  VITE_ENABLE_PUBLIC_ACCESS: z.string().transform(val => val === 'true').default('true'),
});

// Parse environment variables using the schema
const env = {
  // App
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME || 'HandyWriterz',
  VITE_APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  
  // API
  VITE_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  
  // Supabase
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  
  // Clerk
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  
  // Feature Flags
  VITE_ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  VITE_ENABLE_PUBLIC_ACCESS: import.meta.env.VITE_ENABLE_PUBLIC_ACCESS !== 'false',
};

export default env;
