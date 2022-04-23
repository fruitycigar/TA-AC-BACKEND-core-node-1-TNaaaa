var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = 201;
    res.end('Is this real life?');
}

server.listen(4444, () => {
    console.log(`Quattro is now live.`);
})

