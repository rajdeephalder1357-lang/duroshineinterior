const fs = require('fs');
const path = require('path');

const srcDir = './public/senco_Tallygunge';
const destDir = './public/Senco_Tallygunge';

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    fs.renameSync(path.join(srcDir, file), path.join(destDir, file));
  }
  fs.rmdirSync(srcDir);
}
