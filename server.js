const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is my first response')
});

server.listen(process.env.PORT || 3000); //set this to the default port of the host
