import fs from 'fs';
import path from 'path';

function moveFiles(srcDir, destDir, prefix) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    if (fs.statSync(path.join(srcDir, item)).isFile() && item.startsWith(prefix) && item !== 'senco2.png' && item !== 'senco.jpg') {
      const src = path.join(srcDir, item);
      const dest = path.join(destDir, item);
      fs.renameSync(src, dest);
      console.log(`Moved ${item} to ${destDir}`);
    }
  }
}

// What should go where?
// senco_4 to senco_16 are Malancha.
const malanchaFiles = Array.from({length: 13}, (_, i) => \`senco_\${i+4}.jpeg\`);
const dunlopFiles = ['senco_1.jpeg', 'senco_1.png', 'senco_2.jpeg', 'senco_2.png', 'senco_3.jpeg', 'senco_3.png'];

const publicPath = 'public';
const malanchaPath = 'public/senco_Malancha';
const dunlopPath = 'public/senco_dunlop';

for (const file of malanchaFiles) {
  const src = path.join(publicPath, file);
  if (fs.existsSync(src)) {
    fs.renameSync(src, path.join(malanchaPath, file));
    console.log(\`Moved \${file} to \${malanchaPath}\`);
  }
}

for (const file of dunlopFiles) {
  const src = path.join(publicPath, file);
  if (fs.existsSync(src)) {
    fs.renameSync(src, path.join(dunlopPath, file));
    console.log(\`Moved \${file} to \${dunlopPath}\`);
  }
}


