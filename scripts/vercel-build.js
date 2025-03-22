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

// Install dependencies
console.log('📦 Installing dependencies...');
runCommand('pnpm install --frozen-lockfile');

// Build the application
console.log('🏗️ Building application...');
runCommand('pnpm build');

console.log('✅ Build completed successfully!'); 