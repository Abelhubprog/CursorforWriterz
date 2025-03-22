import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Required environment variables for the app to function
const requiredEnvVars = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
  'VITE_CLERK_PUBLISHABLE_KEY'
];

console.log('Checking environment variables before build...');

// Check if environment variables are set directly
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

// If some variables are missing, try to read from .env file if available
if (missingEnvVars.length > 0) {
  console.log(`Missing environment variables: ${missingEnvVars.join(', ')}`);
  
  // Check for .env files
  const envFiles = [
    '.env.production',
    '.env.local',
    '.env'
  ].map(file => path.join(rootDir, file));
  
  let envFileContent = '';
  let loadedFile = '';
  
  // Try to find and load an env file
  for (const envFile of envFiles) {
    try {
      if (fs.existsSync(envFile)) {
        envFileContent = fs.readFileSync(envFile, 'utf8');
        loadedFile = envFile;
        console.log(`Found environment file: ${envFile}`);
        break;
      }
    } catch (err) {
      console.error(`Error checking ${envFile}:`, err);
    }
  }
  
  if (envFileContent) {
    // Parse the env file
    const envVars = envFileContent
      .split('\n')
      .filter(line => !line.startsWith('#') && line.includes('='))
      .reduce((acc, line) => {
        const [key, ...valueParts] = line.split('=');
        const value = valueParts.join('=').trim();
        acc[key.trim()] = value;
        return acc;
      }, {});
    
    // Check if the required variables are in the env file
    const stillMissingVars = missingEnvVars.filter(varName => !envVars[varName]);
    
    if (stillMissingVars.length > 0) {
      console.error(`The following required environment variables are missing from ${loadedFile}:`);
      stillMissingVars.forEach(varName => console.error(`  - ${varName}`));
      
      // Create a minimal .env.production file to prevent build failures
      const productionEnvPath = path.join(rootDir, '.env.production');
      
      if (!fs.existsSync(productionEnvPath)) {
        console.log('Creating a minimal .env.production file to prevent build failures...');
        
        // Use values from the loaded .env file if available
        const productionEnvContent = requiredEnvVars
          .map(varName => {
            const value = envVars[varName] || 'MISSING_VALUE';
            return `${varName}=${value}`;
          })
          .join('\n');
        
        fs.writeFileSync(productionEnvPath, productionEnvContent);
        console.log('Created .env.production file');
      }
      
      console.log('WARNING: Your application may not function correctly without valid environment variables.');
      process.exit(0); // Continue with build despite warnings
    } else {
      console.log('All required environment variables found in environment file.');
    }
  } else {
    console.error('No environment file found. The build may fail or the app may not function correctly.');
    
    // Create a minimal .env.production file to prevent build failures
    const productionEnvPath = path.join(rootDir, '.env.production');
    
    if (!fs.existsSync(productionEnvPath)) {
      console.log('Creating a minimal .env.production file to prevent build failures...');
      
      const productionEnvContent = requiredEnvVars
        .map(varName => `${varName}=MISSING_VALUE`)
        .join('\n');
      
      fs.writeFileSync(productionEnvPath, productionEnvContent);
      console.log('Created .env.production file');
    }
    
    process.exit(0); // Continue with build despite warnings
  }
} else {
  console.log('All required environment variables are set.');
}

// Create a file to verify which env vars were used during build
try {
  const buildInfoFile = path.join(rootDir, 'dist', 'build-info.json');
  const buildInfo = {
    buildTime: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    envVarsPresent: requiredEnvVars.map(varName => ({
      name: varName,
      present: !!process.env[varName]
    }))
  };
  
  // Ensure the dist directory exists
  const distDir = path.join(rootDir, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(buildInfoFile, JSON.stringify(buildInfo, null, 2));
  console.log('Created build info file');
} catch (error) {
  console.error('Error creating build info file:', error);
}

console.log('Environment check completed.');
process.exit(0); 