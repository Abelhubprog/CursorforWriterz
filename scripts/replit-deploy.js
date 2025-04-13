
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying to Replit...');

// Install express if not already installed
try {
  execSync('pnpm list express', { stdio: 'ignore' });
} catch (error) {
  console.log('📦 Installing express...');
  execSync('pnpm add express', { stdio: 'inherit' });
}

// Run the build script
console.log('🏗️ Building application...');
execSync('node scripts/replit-build.js', { stdio: 'inherit' });

// Create an optimized _redirects file for the Replit environment
const redirectsPath = path.join(process.cwd(), 'dist', '_redirects');
fs.writeFileSync(redirectsPath, `
/*    /index.html   200
`);
console.log('✅ Created redirects file for SPA routing');

console.log(`
🎉 Deployment preparation complete! 

Your application is ready to be deployed on Replit.
To deploy your app:

1. Go to the "Deployments" tab in your Replit workspace
2. Select "Autoscale" as the deployment type
3. Configure with at least "Boosted" compute
4. Click "Deploy"

Your app will be available at: https://<your-repl-name>.<your-username>.repl.co
`);
