var url = require('url');
var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

console.log(obj);

/*Url {
  protocol: 'http:',   // 协议部分
  slashes: true,		// 斜杠
  auth: null,			// 授权
  host: 'localhost:3000', // 主机	
  port: '3000',			//	端口
  hostname: 'localhost',	// 主机名（域名部分）
  hash: null,				//
  search: '?username=stark&age=18',	//参数部分
  query: 'username=stark&age=18',	//参数
  pathname: '/index.html',	//文件名
  path: '/index.html?username=stark&age=18',  //路径
  href: 'http://localhost:3000/index.html?username=stark&age=18' //请求地址  }*/ 