var http = require('http');
var url = require('url');

// Question 1


// var server1 = http.createServer(handleRequest1);

// function handleRequest1(req, res) {
//     console.log(req, res);
//     res.end(`87, it'll be okay.`)
// }

// server1.listen(5500, () => {
//     console.log('Server 5500 is up and running.');
// })

// // Question 2

// var server2 = http.createServer(handleRequest2);

// function handleRequest2(req, res) {
//     res.end('My first server in NodeJS.');
// }

// server2.listen(5100, () => {
//     console.log('Server 5100 is now live.');
// })

// // Question 3

// var server3 = http.createServer(handleRequest3);

// function handleRequest3(req, res) {
//     console.log(req.headers);
//     res.end(req.headers['user-agent']);
// }

// server3.listen(5555, () => {
//     console.log('Server 5555 is running.');
// })

// // Question 4

// var server4 = http.createServer(handleRequest4);

// function handleRequest4(req, res) {
//     console.log(req.url, req.method);
//     res.end('Codename KND');
// }

// server4.listen(5566, () => {
//     console.log('Agent 5566 is now live.');
// })

// // Question 5

// var server5 = http.createServer(handleRequest5);

// function handleRequest5(req, res) {
//     res.end(JSON.stringify(req.headers));
// }

// server5.listen(7100, () => {
//     console.log(`Server listening on port 7100.`);
// })

// // Question 6

// var server6 = http.createServer(handleRequest6);

// function handleRequest6(req, res) {
//     res.statusCode = 202;
//     res.end('Will summer come again?');
// }

// server6.listen(3333, () => {
//     console.log(`3333 is now live and running.`);
// })

// // Question 7

// var server7 = http.createServer(handleRequest7);

// function handleRequest7(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h3>Welcome to Altcampus</h3>');
// }

// server7.listen(8000, () => {
//     console.log('8000 coming in live from Dharamshala.');
// })

// // Question 8

// var server8 = http.createServer(handleRequest8);

// function handleRequest8(req, res) {
//     res.writeHead(202, { 'Content-Type': 'text/html' });
//     res.end('<h1>What do you do with someone who does not remember anything?</h1>')
// }

// server8.listen(8787, () => {
//     console.log('Agent Double 87 has been deployed.');
// })

// // Question 9

// var server9 = http.createServer(handleRequest9);

// function handleRequest9(req, res) {
//     res.setHeader('Content-Type', 'text/JSON');
//     res.end(JSON.stringify({ success: true, message: 'Welcome to Nodejs' }));
// }

// server9.listen(8888, () => {
//     console.log('8888 is alright.');
// })

// // Question 10

// var server10 = http.createServer(handleRequest10);

// function handleRequest10(req, res) {
//     req.url === '/index';
//     console.log(req.method);
//     res.setHeader('Content-type', 'text/html');
//     res.end('<h2>posted for first time</h2>');
// }

// server10.listen(5050, () => {
//     console.log('5050 is on the move.');
// })

// // Question 11

// var server11 = http.createServer(handleRequest11);

// function handleRequest11(req, res) {
//     if(req.url === '/' && req.method === 'GET') {
//         res.end('shruthisagar');
//     } else if(req.url === '/about' && req.method === 'GET') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>shruthisagar</h2>');
//     } else {
//         res.statusCode = 404;
//         res.end('Page not found');
//     }
// }

// server11.listen(2345, () => {
//     console.log('2345 is sequentially unfolding.');
// })

// // Question 12

// var server12 = http.createServer(handleRequest12);

// function handleRequest12(req, res) {
//     if(req.url === '/users' && req.method === 'GET') {
//         res.setHeader('Content-type', 'text/html');
//         res.end('<form> <input></input> <input></input> <form>')
//     }
//     if(req.url === '/users' && req.method === 'POST') {
//         res.setHeader('Content-type', 'text/plain');
//         res.end('Posted for the second time.')
//     }
// }

// server12.listen(1212, () => {
//     console.log('1212 is now live.');
// })

// Question 13

 var server13 = http.createServer(handleRequest13);

 function handleRequest13(req, res) {
    var parsedURL = url.parse(req.url, true);
    console.log(parsedURL.pathname, req.url);
    console.log(parsedURL);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parsedURL.query));
 }

 server13.listen(1111, () => {
     console.log('1111 is now live. Fuck Ash.');
 })