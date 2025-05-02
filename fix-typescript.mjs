import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the file
const filePath = path.join(__dirname, 'src', 'pages', 'dashboard', 'Messages.tsx');
console.log(`Reading file: ${filePath}`);
const content = fs.readFileSync(filePath, 'utf8');

// Create a fixed version by addressing the specific issues
let fixedContent = content;

// First, handle the misplaced useEffect around line 1664
const componentEndRegex = /^\s*\}\;\s*\n\s*\n\s*useEffect\s*\(\s*\(\)\s*=>\s*\{/m;
const effectBodyRegex = /^\s*\}\;\s*\n\s*\n\s*useEffect\s*\(\s*\(\)\s*=>\s*\{\s*\n\s*scrollToBottom\(\);\s*\n\s*\}\,\s*\[messages\]\);/m;

// Check if the pattern exists
if (effectBodyRegex.test(fixedContent)) {
  console.log("Found misplaced useEffect with scrollToBottom");
  
  // Replace the pattern with a fixed version
  fixedContent = fixedContent.replace(
    effectBodyRegex,
    `};\n\nexport default Messages;`
  );
} else {
  console.log("Could not find the exact useEffect pattern");
}

// Remove any duplicate export default statements
const exportLines = fixedContent.split('\n')
  .map((line, index) => ({ line, index }))
  .filter(({ line }) => line.trim() === 'export default Messages;');

if (exportLines.length > 1) {
  console.log(`Found ${exportLines.length} export statements at lines: ${exportLines.map(e => e.index).join(', ')}`);
  
  // Keep only the last export statement
  const linesToKeep = new Set([exportLines[exportLines.length - 1].index]);
  
  // Create a new version with only one export statement
  fixedContent = fixedContent.split('\n')
    .map((line, index) => 
      line.trim() === 'export default Messages;' && !linesToKeep.has(index) 
        ? '' // Remove this export line
        : line
    )
    .join('\n');
}

// Write the fixed content back to the file
fs.writeFileSync(filePath, fixedContent);
console.log('File fixed successfully!');

// Verify the fix by checking for any remaining issues
const fixedLines = fixedContent.split('\n');
const remainingIssues = [];

for (let i = 0; i < fixedLines.length; i++) {
  const line = fixedLines[i].trim();
  if (line === 'export default Messages;') {
    remainingIssues.push(`Export statement at line ${i}`);
  }
  
  // Check for misplaced code after component ends
  if (line === '};' && i + 2 < fixedLines.length && fixedLines[i+2].trim().startsWith('useEffect')) {
    remainingIssues.push(`Potential misplaced useEffect at line ${i+2}`);
  }
}

if (remainingIssues.length > 0) {
  console.log('Warning: Potential remaining issues:');
  remainingIssues.forEach(issue => console.log(`- ${issue}`));
} else {
  console.log('No remaining issues detected!');
}
