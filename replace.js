import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx' && f !== 'About.jsx');

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const sectionId = file.replace('.jsx', '').toLowerCase();
  
  // Replace the first <div className="py-16">
  content = content.replace(
    /<div className="py-16">/,
    `<section id="${sectionId}" className="min-h-screen py-16 flex flex-col justify-center snap-start snap-always">`
  );
  
  // Replace the last </div> before the closing ); }
  // We'll use lastIndexOf to replace the last </div>
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
    content = content.slice(0, lastDivIndex) + '</section>' + content.slice(lastDivIndex + 6);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});

// For Skills and Projects which already had the top tag updated:
['Skills.jsx', 'Projects.jsx'].forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
    content = content.slice(0, lastDivIndex) + '</section>' + content.slice(lastDivIndex + 6);
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated end tag for ${file}`);
});
