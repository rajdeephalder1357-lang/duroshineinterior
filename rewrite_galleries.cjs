const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.includes('Gallery'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (file === 'SencoMalanchaGallery.tsx') continue;
  if (!content.includes('grid grid-cols-1')) continue;
  if (!content.includes('.map((src, index) =>')) continue;

  content = content.replace(
    /className=\"grid grid-cols-1 [^\"]*gap-[0-9]+[^\"]*\"/g,
    'className=\"columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6\"'
  );
  
  content = content.replace(
    /className=\"aspect-\[?[0-9a-zA-Z\/]*\]? rounded-sm overflow-hidden bg-gray-100 group block relative\"/g,
    'className=\"rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300\"'
  );
  
  content = content.replace(
    /className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105\"/g,
    'className=\"w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105\"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Done rewriting galleries');
