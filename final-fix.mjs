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

// Split into lines
const lines = content.split('\n');

// Create a completely fresh version with a single export statement at the end
let hasExport = false;

for (let i = 0; i < lines.length; i++) {
  // If we find an export statement
  if (lines[i].trim() === 'export default Messages;') {
    console.log(`Found export at line ${i}`);
    
    // Remove it (set to empty line)
    lines[i] = '';
    
    // If we already set a new export, skip
    if (hasExport) continue;
    
    // Find the component closing line - look for "};""
    for (let j = lines.length - 1; j >= 0; j--) {
      if (lines[j].trim() === '};') {
        console.log(`Found component end at line ${j}`);
        // Insert the export after component end
        lines[j+1] = '\nexport default Messages;';
        hasExport = true;
        break;
      }
    }
  }
}

if (!hasExport) {
  console.log("Warning: Could not add export statement!");
}

// Write the fixed content back to file
fs.writeFileSync(filePath, lines.join('\n'));
console.log('File fixed successfully!');

// Verify the fix
const fixedContent = fs.readFileSync(filePath, 'utf8');
const exportCount = (fixedContent.match(/export default Messages;/g) || []).length;
console.log(`The file now has ${exportCount} export statement(s)`);
