var { readFile, readFileSync } = require('fs');

// async version
readFile('./content.md', 'utf8', (err, content) => {
   console.log(content);
})

// sync version 
var result = readFileSync('./content.md', 'utf-8');

console.log(result);

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write(`Welcome to Buffer.`);
console.log(buff1.toString());

