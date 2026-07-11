import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove snap-start snap-always
  content = content.replace(/snap-start snap-always/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
