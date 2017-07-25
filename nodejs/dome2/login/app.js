const http = require('http'); //引用http模板
const fs = require('fs');   //引用fs 模板
const querystring = require('querystring'); //引用querystring 模板 
const urlLib = require('url');  //引用url 模板

// 自定义一些用户

var users = {'stark':'stark','xiaoming':'xiaoming','xiaohong':'xiaohong'};

const server = http.createServer(function(req,res){
    var str = '';

    var obj = urlLib.parse(req.url,true); //url返回的内容
    const url = obj.pathname
    const GET = obj.query;

      if (url == '/user') {
          //用swich方法 查看act 的方法
        switch (GET.act) {
                //注册判断
            case 'reg':
                if (users[GET.user]) {
                    res.write('{"status":0,"data":"此用户已经存在"}');
                } else {
                    // 把用户存储下来
                    users[GET.user] = GET.pass;
                    // 例子
                    // users['ming'] = 'ming';
                    res.write('{"status":1,"data":"注册成功"}')
                }
                break;
                    //登录的判断
            case 'login':
                if (users[GET.user] == null) {
                    res.write('{"status":0,"data":"此用户不存在或为空"}');
                } else if (users[GET.user] != GET.pass) {
                    res.write('{"status":0,"data":"用户名或密码有误"}');
                } else {
                    res.write('{"status":1,"data":"登录成功"}');
                }
                break;
            default:
                res.write('{"status":0,"data":"未知的行为"}')

        }
        //结束语句
        res.end();
    } else {
        // 读取文件
        var file_name = 'dist' + url;
        fs.readFile(file_name, function(err, data) {
                if (err) {
                    res.write('hi，guys,你访问的页面未找到！404！！！');

                } else {
                    res.write(data);
                }

                res.end();
            })
            // res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" })

            // res.write('请访问index.html');
            // res.end();
    }

})

server.listen(3000);