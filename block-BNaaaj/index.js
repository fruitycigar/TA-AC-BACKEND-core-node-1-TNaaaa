var os = require('os');

console.log(`Welcome to Nodejs`);

var cpus = os.cpus().length;
var freeM = os.freemem();
var upTime = os.uptime();
var version = os.version();

console.log(cpus, freeM, upTime, version);


var { readFile, unlink } = require('fs');

// let buff12 = Buffer.alloc(12);

// console.log(buff12.toString());