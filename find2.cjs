const execSync = require('child_process').execSync;
console.log(execSync('find /app/applet -name "*dunlop*" 2>/dev/null').toString());
