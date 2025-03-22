const { execSync } = require('child_process');
const path = require('path');

function runCommand(command, errorMessage) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
    console.error(error);
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Starting Vercel deployment preparation...');

  // Install dependencies
  console.log('📦 Installing dependencies...');
  runCommand('pnpm install', 'Failed to install dependencies');

  // Type check
  console.log('🔍 Running type check...');
  runCommand('pnpm tsc --noEmit', 'Type check failed');

  // Build
  console.log('🏗️ Building project...');
  runCommand('pnpm build', 'Build failed');

  // Verify build output
  console.log('✅ Verifying build output...');
  runCommand('node scripts/ensure-build.js', 'Build verification failed');

  console.log('✨ Deployment preparation complete!');
}

main().catch((error) => {
  console.error('❌ Deployment preparation failed:', error);
  process.exit(1);
}); 