import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the file
const filePath = path.join(__dirname, 'src', 'pages', 'dashboard', 'Messages.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Split into lines
const lines = content.split('\n');

// Find all export statements
const exportLines = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === 'export default Messages;') {
    exportLines.push(i);
  }
}

console.log(`Found export statements at lines: ${exportLines.join(', ')}`);

// Keep only the last export statement, remove others
if (exportLines.length > 1) {
  for (let i = 0; i < exportLines.length - 1; i++) {
    lines[exportLines[i]] = '';
  }
}

// Find misplaced useEffect statements after component ends
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '};' && 
      i + 2 < lines.length && 
      lines[i+2].trim().startsWith('useEffect')) {
    
    // This is a component end followed by useEffect - need to fix
    console.log(`Found misplaced useEffect at line ${i+2}`);
    
    // Find where this effect ends
    let effectEndLine = i+2;
    let braceCount = 0;
    let foundEnd = false;
    
    for (let j = i+2; j < lines.length; j++) {
      const line = lines[j];
      
      // Count braces to find the end of the effect
      for (let k = 0; k < line.length; k++) {
        if (line[k] === '{') braceCount++;
        if (line[k] === '}') {
          braceCount--;
          if (braceCount <= 0 && line.includes('});')) {
            effectEndLine = j;
            foundEnd = true;
            break;
          }
        }
      }
      
      if (foundEnd) break;
    }
    
    // Extract the useEffect code
    const effectCode = lines.slice(i+2, effectEndLine+1);
    
    // Insert it before the component end
    lines.splice(i, 0, ...effectCode);
    
    // Remove the original misplaced code
    for (let j = 0; j <= (effectEndLine - i); j++) {
      lines[i+2+effectCode.length+j] = '';
    }
    
    console.log(`Moved useEffect from line ${i+2} to line ${i}`);
    
    // Skip ahead since we modified the array
    i += effectCode.length;
  }
}

// Write the file back
fs.writeFileSync(filePath, lines.join('\n'));

console.log('File fixed successfully!');
