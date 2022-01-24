const http = require('http');

http.createServer( (req, res) => {
    // 여기에 어떻게 응답할 지 적습니다.
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<p> hello server! </p>');
}).listen(8082, () => { // 서버 연결
    console.log('8082번 포트에서 서버 대기 중입니다!');
});

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<p> This is 8083! </p>');
});

server.listen(8083);

server.on('listening', () => {
    console.log("8083번 포트에서 서버 대기 중입니다.");
})


server.on('error', (error) => {
    console.error(err);
})