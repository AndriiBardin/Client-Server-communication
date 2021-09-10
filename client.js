const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
}).listen(8081, () => {
    console.log("server running on 8081")
})