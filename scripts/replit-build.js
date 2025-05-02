
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if all required environment variables are present
function checkEnvironmentVariables() {
  console.log('Checking environment variables...');
  const requiredVars = [
    'VITE_CLERK_PUBLISHABLE_KEY',
    'VITE_APPWRITE_PROJECT_ID',
    'VITE_APPWRITE_DATABASE_ID'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn(`⚠️ Missing environment variables: ${missingVars.join(', ')}`);
    console.warn('Some features may not work correctly in production!');
  } else {
    console.log('✅ All required environment variables are set');
  }
}

// Function to run the build
function buildForProduction() {
  console.log('Building for production...');
  try {
    execSync('pnpm build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Create necessary files for Replit deployment
function prepareForReplit() {
  console.log('Preparing for Replit deployment...');
  
  // Create .replit file if it doesn't exist
  const replitFilePath = path.join(process.cwd(), '.replit');
  if (!fs.existsSync(replitFilePath)) {
    const replitContent = `
run = "npm run preview"
entrypoint = "src/main.tsx"

[env]
VITE_APP_URL = "https://$REPL_SLUG.$REPL_OWNER.repl.co"
NODE_ENV = "production"

[nix]
channel = "stable-22_11"

[deployment]
run = ["sh", "-c", "npm run preview"]
deploymentTarget = "cloudrun"
`;
    fs.writeFileSync(replitFilePath, replitContent);
    console.log('✅ Created .replit file');
  }
  
  // Add Replit deployment script to package.json
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (!packageJson.scripts.preview) {
      packageJson.scripts.preview = 'vite preview --host 0.0.0.0 --port 5000';
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log('✅ Added preview script to package.json');
    }
  }
  
  // Create a simple server file for production
  const serverFilePath = path.join(process.cwd(), 'server.js');
  const serverContent = `
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for any other routes (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;
  fs.writeFileSync(serverFilePath, serverContent);
  console.log('✅ Created server.js for production');
}

// Main function
async function main() {
  console.log('🚀 Starting production build process for Replit...');
  
  checkEnvironmentVariables();
  buildForProduction();
  prepareForReplit();
  
  console.log('✅ Production build process completed successfully');
  console.log('To deploy on Replit, go to the "Deployments" tab and click "Deploy"');
}

main().catch(error => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
