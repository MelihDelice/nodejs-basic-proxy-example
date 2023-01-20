const http = require('http');
const request = require('request');


http.createServer(function(req, res) {
    if (req.url.startsWith('/random-image')) {
        const imageUrl = 'https://picsum.photos/300';
        req.pipe(request(imageUrl)).pipe(res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<image src="/random-image/${Math.random()}" />`);
        res.end();
    }
}).listen(8000);