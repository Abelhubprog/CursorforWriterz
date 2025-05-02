
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function checkDependency(name) {
  try {
    execSync(`pnpm list ${name}`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function checkFile(filePath) {
  return fs.existsSync(path.join(process.cwd(), filePath));
}

const checks = [
  {
    name: 'Environment files',
    check: () => checkFile('.env.production'),
    fix: () => console.log('Create .env.production with your production values'),
    critical: true
  },
  {
    name: 'Build configuration',
    check: () => checkFile('vite.config.ts'),
    fix: () => console.log('Ensure vite.config.ts is properly configured'),
    critical: true
  },
  {
    name: 'Express dependency',
    check: () => checkDependency('express'),
    fix: () => console.log('Run: pnpm add express'),
    critical: false
  },
  {
    name: 'Server file for production',
    check: () => checkFile('server.js'),
    fix: () => console.log('Create server.js for serving the production build'),
    critical: false
  }
];

console.log('Verifying deployment prerequisites...\n');

let allPassed = true;
let criticalFailed = false;

checks.forEach(({ name, check, fix, critical }) => {
  const passed = check();
  console.log(`${passed ? '✅' : '❌'} ${name} ${critical ? '(CRITICAL)' : ''}`);
  
  if (!passed) {
    console.log(`   ↳ FIX: ${fix()}`);
    allPassed = false;
    if (critical) criticalFailed = true;
  }
});

console.log('\n');

if (criticalFailed) {
  console.error('❌ Critical checks failed. Please fix them before deploying.');
  process.exit(1);
} else if (!allPassed) {
  console.warn('⚠️ Some non-critical checks failed. Deployment may have issues.');
} else {
  console.log('✅ All deployment checks passed!');
}
