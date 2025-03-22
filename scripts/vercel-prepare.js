const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function ensureEnvVars() {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_CLERK_PUBLISHABLE_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars.join(', '));
    process.exit(1);
  }
}

function setupBuildDependencies() {
  try {
    execSync('pnpm install', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to install dependencies:', error);
    process.exit(1);
  }
}

function main() {
  console.log('🚀 Preparing Vercel build environment...');
  
  ensureEnvVars();
  setupBuildDependencies();
  
  console.log('✅ Build environment prepared successfully');
}

main(); 