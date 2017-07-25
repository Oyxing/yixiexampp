const http = require('http');

const fs = require('fs');   //引用fs 模板
const querystring = require('querystring'); //引用querystring 模板 
const urlLib = require('url');  //引用url 模板

const server = http.createServer(function(req,res){
     var urlobj = urlLib.parse(req.url, true);    //引用出url内容

        switch (urlobj.pathname) {
        case "/":    //进入根目录
            fs.readFile("./static/biaodan.html", function(err, data) {
                if (err) {
                    res.end('404，您访问的页面不存在！');
                    return;
                }

                res.setHeader('Content-Type', 'text/html;charset=UTF-8');  

                res.end(data);  //获取到你的html文件内容

            })

            break;
        case "/tijiao":  //识别到/tijiao 的目录

            //从urlobj 里的 query里的对象值
            console.log(urlobj)

            
            /*  例子:
                Url {
                    protocol: null,
                    slashes: null,
                    auth: null,
                    host: null,
                    port: null,
                    hostname: null,
                    hash: null,
                    search: '?xingming=haha&status=%E5%88%9A%E5%88%9A%E5%A5%BD&message=nimaoasdaadasd',
                    query: { xingming: 'haha', status: '刚刚好', message: 'nimaoasdaadasd' },
                    pathname: '/tijiao',
                    path: '/tijiao?xingming=haha&status=%E5%88%9A%E5%88%9A%E5%A5%BD&message=nimaoasdaadasd',
                    href: '/tijiao?xingming=haha&status=%E5%88%9A%E5%88%9A%E5%A5%BD&message=nimaoasdaadasd' }
            */
            var str = "姓名：" + urlobj.query.xingming;
            str += " 快慢：" + urlobj.query.status;
            str += " 留言：" + urlobj.query.message;

            fs.appendFile("./static/调查结果.md", str + "\n", function(err) {
                if (err) {
                    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                    res.end("hi，你的表单提交失败了！！！");
                    return;
                }
                res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                res.end('你得表单已经提交成功！祝你一路顺风！！！');
            })
            break;
        default:
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            res.end("没有有这个页面！！！");

    }

})
server.listen(3000,"192.168.3.28");