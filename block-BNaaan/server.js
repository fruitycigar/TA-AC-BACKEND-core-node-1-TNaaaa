var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.end(`Welcome to prime time, b#$&^!`);
}

server.listen(3000, () => {
    console.log(`Agent 3000 is now live.`);
})