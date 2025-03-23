#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// ANSI escape codes for colors using the escape character
const ESC = String.fromCharCode(27);
const green = text => `${ESC}[32m${text}${ESC}[0m`;
const yellow = text => `${ESC}[33m${text}${ESC}[0m`;
const red = text => `${ESC}[31m${text}${ESC}[0m`;

const requiredFiles = [
  'vercel.json',
  'vite.config.ts',
  'scripts/vercel-build.js',
  'package.json',
  'tsconfig.json',
  'index.html',
  'src/main.tsx'
];

const requiredEnvVars = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
  'VITE_CLERK_PUBLISHABLE_KEY',
  'VITE_APP_URL'
];

const requiredVercelConfig = [
  'buildCommand',
  'outputDirectory',
  'framework',
  'rewrites',
  'env'
];

const requiredPackageScripts = [
  'build',
  'build:vercel',
  'vercel-build'
];

console.log(yellow('🔍 Starting deployment validation...\n'));

let hasErrors = false;

// Check required files
console.log(yellow('Checking required files...'));
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(green(`✓ Found ${file}`));
  } else {
    console.log(red(`✗ Missing ${file}`));
    hasErrors = true;
  }
}

// Check vercel.json configuration
console.log('\n' + yellow('Checking vercel.json configuration...'));
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  for (const key of requiredVercelConfig) {
    if (vercelConfig[key]) {
      console.log(green(`✓ Found ${key} configuration`));
    } else {
      console.log(red(`✗ Missing ${key} configuration in vercel.json`));
      hasErrors = true;
    }
  }
} catch (error) {
  console.log(red('✗ Error reading vercel.json'));
  hasErrors = true;
}

// Check package.json scripts
console.log('\n' + yellow('Checking package.json scripts...'));
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  for (const script of requiredPackageScripts) {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(green(`✓ Found ${script} script`));
    } else {
      console.log(red(`✗ Missing ${script} script in package.json`));
      hasErrors = true;
    }
  }
} catch (error) {
  console.log(red('✗ Error reading package.json'));
  hasErrors = true;
}

// Check environment variables
console.log('\n' + yellow('Checking environment variables...'));
const envFiles = ['.env.production', '.env'];
let envFound = false;

for (const envFile of envFiles) {
  if (fs.existsSync(envFile)) {
    envFound = true;
    console.log(green(`✓ Found ${envFile}`));
    const envContent = fs.readFileSync(envFile, 'utf8');
    for (const envVar of requiredEnvVars) {
      if (envContent.includes(envVar + '=')) {
        console.log(green(`✓ Found ${envVar} in ${envFile}`));
      } else {
        console.log(red(`✗ Missing ${envVar} in ${envFile}`));
        hasErrors = true;
      }
    }
    break;
  }
}

if (!envFound) {
  console.log(red('✗ No environment file found (.env.production or .env)'));
  hasErrors = true;
}

// Check Node.js version
console.log('\n' + yellow('Checking Node.js version...'));
try {
  const nodeVersion = process.version;
  if (nodeVersion.startsWith('v18') || nodeVersion > 'v18') {
    console.log(green(`✓ Node.js version ${nodeVersion} is compatible`));
  } else {
    console.log(red(`✗ Node.js version ${nodeVersion} is not compatible (requires >= v18)`));
    hasErrors = true;
  }
} catch (error) {
  console.log(red('✗ Error checking Node.js version'));
  hasErrors = true;
}

// Try local build
console.log('\n' + yellow('Attempting local build verification...'));
try {
  execSync('pnpm build:vercel --dry-run', { stdio: 'inherit' });
  console.log(green('✓ Build verification successful'));
} catch (error) {
  console.log(red('✗ Build verification failed'));
  hasErrors = true;
}

// Final Summary
console.log('\n' + yellow('Deployment Validation Summary'));
console.log('=========================');
if (hasErrors) {
  console.log(red('❌ Validation failed! Please fix the issues above before deploying.'));
  console.log('\nTroubleshooting tips:');
  console.log('1. Ensure all required files are present');
  console.log('2. Check vercel.json configuration');
  console.log('3. Verify environment variables');
  console.log('4. Update Node.js if needed');
  console.log('5. Fix any build errors\n');
  process.exit(1);
} else {
  console.log(green('✅ All checks passed! Ready for deployment.'));
  console.log('\nNext steps:');
  console.log('1. Run ./vercel-deploy.sh (Unix) or .\\vercel-deploy.ps1 (Windows)');
  console.log('2. Follow the deployment steps in DEPLOYMENT.md\n');
}
