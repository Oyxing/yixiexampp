var url = require('url');
var querstring = require('querystring');

var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

let query = obj.query;

var obj1 = querstring.parse(query);
console.log(obj1);
// { username: 'stark', age: '18' }
console.log(obj);

/*  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?username=stark&age=18',
  query: 'username=stark&age=18',
  pathname: '/index.html',
  path: '/index.html?username=stark&age=18',
  href: 'http://localhost:3000/index.html?username=stark&age=18' }*/