import { z } from 'zod';

const envSchema = z.object({
  // API
  VITE_API_URL: z.string().url(),

  // Supabase
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string().min(1),

  // Clerk
  VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1),

  // Appwrite
  VITE_APPWRITE_PROJECT_ID: z.string().default('092025'),
  VITE_APPWRITE_ENDPOINT: z.string().url().default('https://cloud.appwrite.io/v1'),
  VITE_APPWRITE_DATABASE_ID: z.string().default('09202502'),
  VITE_APPWRITE_ADMIN_COLLECTION: z.string().default('0920250011'),

  // Service configuration
  VITE_TURNITIN_MAX_FILE_SIZE: z.string().transform((val: string) => parseInt(val, 10)),
  VITE_TURNITIN_ALLOWED_TYPES: z.string(),

  // Feature flags
  VITE_ENABLE_TURNITIN: z.string().transform((val: string) => val === 'true'),
  VITE_ENABLE_TELEGRAM: z.string().transform((val: string) => val === 'true')
});

function getEnvVars() {
  // Use import.meta.env directly with type safety
  const envVars = {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    VITE_CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
    VITE_APPWRITE_PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    VITE_APPWRITE_ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
    VITE_APPWRITE_DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    VITE_APPWRITE_ADMIN_COLLECTION: import.meta.env.VITE_APPWRITE_ADMIN_COLLECTION,
    VITE_TURNITIN_MAX_FILE_SIZE: import.meta.env.VITE_TURNITIN_MAX_FILE_SIZE,
    VITE_TURNITIN_ALLOWED_TYPES: import.meta.env.VITE_TURNITIN_ALLOWED_TYPES,
    VITE_ENABLE_TURNITIN: import.meta.env.VITE_ENABLE_TURNITIN,
    VITE_ENABLE_TELEGRAM: import.meta.env.VITE_ENABLE_TELEGRAM
  };

  const result = envSchema.safeParse(envVars);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return result.data;
}

export const env = getEnvVars();
