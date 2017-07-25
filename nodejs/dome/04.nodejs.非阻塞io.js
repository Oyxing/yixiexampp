const http = require('http');
const fs = require('fs');

const hostname = '192.168.3.28';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.connection.remoteAddress + "进来了开始计算");
    // var a = parseInt(Math.random() * 1000);
    while (parseInt(Math.random() * 10000) != 5555) {
        // 模拟计算一个任务

        console.log(1111111111);
    }

    console.log(req.connection.remoteAddress + "此刻出现5555");


    // 下面这个语句是读取文件，注意他是一个异步语句
    fs.readFile("./1.jpg", function(err, data) {
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);

        console.log(req.connection.remoteAddress + "读取图片完毕");
    })

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});