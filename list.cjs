const fs = require('fs');
console.log(fs.readdirSync('.').filter(f => !f.includes('node_modules') && !f.includes('.git')));
