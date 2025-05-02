const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'src', 'pages', 'dashboard', 'Messages.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Split into lines
const lines = content.split('\n');

// Remove export statement from line 1663
if (lines[1663] && lines[1663].trim() === 'export default Messages;') {
  lines[1663] = '';
}

// Remove export statement from around line 2406
if (lines.length > 2406 && lines[2406] && lines[2406].trim() === 'export default Messages;') {
  lines[2406] = '';
}

// Make sure the useEffect at line 1664 is properly inside the component
if (lines[1664] && lines[1664].trim().startsWith('useEffect')) {
  // Find the component end
  let componentEndLine = -1;
  for (let i = 1660; i < 1664; i++) {
    if (lines[i] && lines[i].trim() === '};') {
      componentEndLine = i;
      break;
    }
  }

  if (componentEndLine > 0) {
    // Move the useEffect before the component end
    const useEffectCode = lines.splice(1664, 3).join('\n');
    lines.splice(componentEndLine, 0, useEffectCode);
  }
}

// Write the file back
fs.writeFileSync(filePath, lines.join('\n'));

console.log('File fixed successfully!');
