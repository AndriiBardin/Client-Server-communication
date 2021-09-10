const http = require('http');
const fs = require('fs');
const path = require('path');

const words = ['dog', 'cat', 'horse', 'mouse', 'fox'];


function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}


function sse(req, res) {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader('Access-Control-Allow-Origin', '*',)

    let word = getWord();
    console.log(word)
    let id = 0;

    res.write(`data: ${word} \n`);
    res.write(`id: ${++id} \n`);
    res.write("\n");

    let job = setInterval(() => {
        word = getWord();
        console.log(word)
        res.write(`data: ${word} \n`);
        res.write(`id: ${++id} \n`);
        res.write("\n");

    }, 5000);

    res.socket.on('close',  () => {
        res.end();
        clearInterval(job);
    })
}

http.createServer((req, res) => {
    const url = new URL(`http://${req.headers.host}${req.url}`)

    if (url.pathname === "/stream") {
        sse(req, res);
        return;
    }
}).listen(8080, () => {
    console.log("server running on 8080")
})