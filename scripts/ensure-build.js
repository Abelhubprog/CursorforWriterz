const fs = require('fs');
const path = require('path');

function checkBuildOutput() {
  const distDir = path.join(process.cwd(), 'dist');
  const requiredFiles = ['index.html', 'assets'];

  console.log('Checking build output...');

  if (!fs.existsSync(distDir)) {
    throw new Error('dist directory not found');
  }

  for (const file of requiredFiles) {
    const filePath = path.join(distDir, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required build output ${file} not found`);
    }
  }

  console.log('✅ Build output verification passed');
}

function main() {
  try {
    checkBuildOutput();
    process.exit(0);
  } catch (error) {
    console.error('❌ Build verification failed:', error.message);
    process.exit(1);
  }
}

main(); 