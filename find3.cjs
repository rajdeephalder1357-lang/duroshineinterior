const fs = require('fs');
const execSync = require('child_process').execSync;
console.log(execSync('find / -name "*senco*" 2>/dev/null').toString());
