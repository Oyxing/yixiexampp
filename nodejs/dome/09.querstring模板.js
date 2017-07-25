

var querstring = require('querystring');
var obj = querstring.parse('username=stark&age=18&hobby=lanqiu');
console.log(obj);

//获取到参数的数值对象
// { username: 'stark', age: '18', hobby: 'lanqiu' }