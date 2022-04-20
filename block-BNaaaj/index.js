console.log(`Welcome to Nodejs`);

// var os = require('os');
// os.cpus.length();
// os.freemem();
// os.uptime();
// os.version();

var { readFile, unlink } = require('fs');

let buff12 = Buffer.alloc(12);

console.log(buff12.toString());