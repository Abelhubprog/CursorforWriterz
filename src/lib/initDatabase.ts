import { supabase } from './supabase';

/**
 * Initializes the database with required tables and schemas
 */
export const initializeDatabase = async () => {
  try {
    // Basic tables needed for the application
    const requiredTables = [
      'user_profiles',
      'content',
      'services',
      'orders',
      'payments',
      'admin_users'
    ];
    
    // Check which tables already exist
    const { data: existingTables, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');
      
    if (error) throw error;
    
    // Create missing tables
    for (const table of requiredTables) {
      if (!existingTables?.find((t: any) => t.table_name === table)) {
        console.log(`Creating table: ${table}`);
        await createTable(table);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error };
  }
};

/**
 * Creates a specific table based on table name
 */
const createTable = async (tableName: string) => {
  switch(tableName) {
    case 'user_profiles':
      await createUserProfilesTable();
      break;
    case 'content':
      await createContentTable();
      break;
    // Other tables would be added here
    default:
      console.log(`No schema defined for table: ${tableName}`);
  }
};

/**
 * Creates the user_profiles table
 */
const createUserProfilesTable = async () => {
  const { error } = await supabase.query(`
    CREATE TABLE public.user_profiles (
      id UUID PRIMARY KEY,
      full_name TEXT,
      email TEXT UNIQUE,
      avatar_url TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
  
  if (error) throw error;
};

/**
 * Creates the content table
 */
const createContentTable = async () => {
  const { error } = await supabase.query(`
    CREATE TABLE public.content (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT,
      status TEXT DEFAULT 'draft',
      author_id UUID REFERENCES public.user_profiles(id),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);
  
  if (error) throw error;
};

/**
 * Applies security policies to the database
 */
export const applyPolicies = async () => {
  try {
    // Enable Row Level Security on all tables
    const requiredTables = [
      'user_profiles',
      'content',
      'services',
      'orders',
      'payments',
      'admin_users'
    ];
    
    for (const table of requiredTables) {
      await supabase.query(`
        ALTER TABLE public.${table} ENABLE ROW LEVEL SECURITY;
      `);
    }
    
    // Apply specific policies
    
    // User profiles - allow users to read/update their own profile
    await supabase.query(`
      CREATE POLICY "Users can view their own profile"
        ON public.user_profiles FOR SELECT
        USING (auth.uid() = id);
        
      CREATE POLICY "Users can update their own profile"
        ON public.user_profiles FOR UPDATE
        USING (auth.uid() = id);
    `);
    
    // Content - public content is readable by everyone
    await supabase.query(`
      CREATE POLICY "Public content is viewable by everyone"
        ON public.content FOR SELECT
        USING (status = 'published');
        
      CREATE POLICY "Users can update their own content"
        ON public.content FOR UPDATE
        USING (auth.uid() = author_id);
    `);
    
    return { success: true };
  } catch (error) {
    console.error('Error applying policies:', error);
    return { success: false, error };
  }
}; 