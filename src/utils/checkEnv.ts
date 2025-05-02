/**
 * Environment validation utility
 * Ensures required environment variables are available
 */

export function validateEnvironment(): { valid: boolean; missing: string[] } {
  const required = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_CLERK_PUBLISHABLE_KEY'
  ];
  
  const missing = required.filter(env => !import.meta.env[env]);
  
  return {
    valid: missing.length === 0,
    missing
  };
}

/**
 * Log environment validation results
 * Useful for debugging deployment issues
 */
export function logEnvironmentStatus(): void {
  const { valid, missing } = validateEnvironment();
  
  if (valid) {
    console.log('✅ All required environment variables are present');
  } else {
    console.error(`❌ Missing environment variables: ${missing.join(', ')}`);
    
    // Log the available environment variables (without sensitive values)
    const safeEnvs = Object.keys(import.meta.env)
      .filter(key => !key.includes('SECRET') && !key.includes('KEY'))
      .reduce((acc, key) => {
        acc[key] = import.meta.env[key] ? '✅ Present' : '❌ Missing';
        return acc;
      }, {} as Record<string, string>);
    
    console.log('Environment status:', safeEnvs);
  }
}

export default validateEnvironment; 