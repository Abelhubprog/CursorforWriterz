const { execSync } = require('child_process');

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute command: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

console.log('🚀 Starting Vercel build process...');

// Setup environment if needed
console.log('🔧 Setting up environment...');
try {
  // Check if we're in a CI environment
  if (process.env.CI || process.env.VERCEL) {
    console.log('Detected CI/Vercel environment');
  }
} catch (error) {
  console.warn('Environment setup warning:', error.message);
}

// Install dependencies
console.log('📦 Installing dependencies...');
runCommand('pnpm install --frozen-lockfile');

// Build the application with additional flags for troubleshooting
console.log('🏗️ Building application...');
try {
  runCommand('pnpm run build');
} catch (error) {
  console.error('Build failed, attempting fallback build...');
  // Fallback to simpler build command if the main one fails
  runCommand('npx vite build');
}

console.log('✅ Build completed successfully!'); 