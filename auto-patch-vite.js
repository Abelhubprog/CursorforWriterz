/**
 * Vite Environment Auto-Patcher
 * 
 * This script fixes the Vite env.mjs file that has invalid syntax.
 * It can be run directly with Node.js: node auto-patch-vite.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Path to the Vite client env.mjs file
const viteClientEnvPath = path.join(process.cwd(), 'node_modules', 'vite', 'dist', 'client', 'env.mjs');

console.log('Starting Vite Environment Auto-Patcher...');
console.log(`Looking for Vite env.mjs at: ${viteClientEnvPath}`);

// Check if the file exists
if (!fs.existsSync(viteClientEnvPath)) {
  console.log('Vite client env.mjs not found. Please ensure Vite is installed.');
  process.exit(1);
}

// Create a fixed version of the env.mjs file
const fixedEnvContent = `// This file is auto-generated
export const __WS_TOKEN__ = 'development';
`;

// Function to patch the file
function patchEnvFile() {
  try {
    const currentContent = fs.readFileSync(viteClientEnvPath, 'utf8');
    
    // Check if the file contains invalid syntax
    if (currentContent.match(/export const "[^"]+" = /)) {
      console.log('Found invalid syntax in env.mjs, patching...');
      
      // Backup the original file
      fs.writeFileSync(`${viteClientEnvPath}.bak`, currentContent);
      console.log(`Backup created at ${viteClientEnvPath}.bak`);
      
      // Write the fixed content
      fs.writeFileSync(viteClientEnvPath, fixedEnvContent);
      console.log('✅ Fixed Vite client env.mjs');
    } else {
      console.log('env.mjs appears to be valid, no patching needed.');
    }
  } catch (error) {
    console.error('Error patching env.mjs:', error.message);
  }
}

// Initial patch
patchEnvFile();

// Set up a file watcher to patch the file whenever it changes
console.log('Setting up file watcher for env.mjs...');

fs.watchFile(viteClientEnvPath, { interval: 1000 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('env.mjs changed, checking if patching is needed...');
    patchEnvFile();
  }
});

// Start the dev server
console.log('Starting development server...');

const devProcess = exec('pnpm dev', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting dev server: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Dev server stderr: ${stderr}`);
  }
  console.log(`Dev server stdout: ${stdout}`);
});

// Log output from the dev server
devProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

devProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Handle process exit
process.on('SIGINT', () => {
  fs.unwatchFile(viteClientEnvPath);
  devProcess.kill();
  console.log('Stopping auto-patcher and dev server...');
  process.exit(0);
});

console.log('Auto-patcher running. Press Ctrl+C to stop.'); 