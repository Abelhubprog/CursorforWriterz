/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  readonly VITE_APPWRITE_PROJECT_ID: string
  readonly VITE_APPWRITE_ENDPOINT: string
  readonly VITE_APPWRITE_DATABASE_ID: string
  readonly VITE_APPWRITE_ADMIN_COLLECTION: string
  readonly VITE_TURNITIN_MAX_FILE_SIZE: string
  readonly VITE_TURNITIN_ALLOWED_TYPES: string
  readonly VITE_ENABLE_TURNITIN: string
  readonly VITE_ENABLE_TELEGRAM: string
  // Add any other env vars here
  [key: string]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
