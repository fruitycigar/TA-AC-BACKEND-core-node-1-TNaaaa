var http = require('http');

http.createServer((req, res) => {
    res.end('You know what to do.')
}).listen(4000, () => {
    console.log('Agent 4000 is spying on us. But that is a good thing.');
})