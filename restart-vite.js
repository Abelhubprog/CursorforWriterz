// Script to properly restart Vite server
import { exec } from 'child_process';
import fs from 'fs';

// Kill any running Vite processes
const killVite = () => {
  return new Promise((resolve) => {
    console.log('Stopping any running Vite servers...');
    
    // Windows-specific command to kill vite processes
    exec('taskkill /f /im node.exe /fi "WINDOWTITLE eq vite"', (error) => {
      // Ignore errors as it might not find any processes to kill
      resolve();
    });
  });
};

// Start Vite with a clean slate
const startVite = () => {
  console.log('Starting new Vite server...');
  
  // Clear the .vite cache directory if it exists
  const viteCacheDir = './node_modules/.vite';
  if (fs.existsSync(viteCacheDir)) {
    console.log('Clearing Vite cache...');
    fs.rmSync(viteCacheDir, { recursive: true, force: true });
  }
  
  // Start Vite with force flag
  const viteProcess = exec('pnpm vite --force', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting Vite: ${error.message}`);
      return;
    }
    console.log(stdout);
  });
  
  viteProcess.stdout.pipe(process.stdout);
  viteProcess.stderr.pipe(process.stderr);
};

// Main function
const main = async () => {
  await killVite();
  startVite();
};

main().catch(console.error); 