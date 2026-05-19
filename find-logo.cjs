const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}
const files = walk('./public');
const rootFiles = fs.readdirSync('./').filter(f => fs.statSync(f).isFile());
const all = [...files, ...rootFiles];
const withTime = all.map(f => ({ file: f, time: fs.statSync(f).mtime.getTime(), ctime: fs.statSync(f).ctime.getTime() }));
withTime.sort((a,b) => b.ctime - a.ctime);
console.log(withTime.slice(0, 10).map(i => i.file));
