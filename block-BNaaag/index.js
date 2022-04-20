var fs = require('fs');

fs.readFile('./content.md', (err, file) => {
   console.log(file);
})