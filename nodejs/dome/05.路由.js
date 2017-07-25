const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const hostname = '192.168.3.28';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    console.log("接收一个请求");
    if (req.url == '/stark') {
        // 设置http返回的内容
        res.end("{ username: 'stark', age: '18' }");
    } else if (req.url == '/hehe') {
        res.end("你呵呵啥！！！呵呵");
    } else if (req.url == '/hello') {
        fs.readFile('index.html', function(err, data) {
            res.end(data);
        })
        //  给url里添加后缀
    } else if (req.url == '/img') {
        fs.readFile('./1.jpg', function(err, data) {
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(data);
        })
    } else {
        res.end('hi，body，没有这个网址');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


