/*let username = "stark";
let stark = "stark1";
let stark1 = "stark1";
let stark2 = "stark2";
let stark3 = "stark3";

console.log(stark1)
console.log(stark2)
console.log(stark3)

let [a, [b], d] = [1, [2, 3], 4];
//  a // 1
//  b // 2
//  d // 4
console.log(a,b,d)

function add([x,y]){
    return x+y;
}

console.log(add([3,8]))

let {length:len} = "stark";
console.log(len)

function hell(x,y){
    y = y || "work";
    console.log(x,y);
}
hell("ni","hao")


console.log(log)
console.log(sin)
console.log(cos)

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

function factorial(n) {
  return tailFactorial(n, 1);
}

factorial(5) // 120

console.log(factorial(11))


*/
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
console.log(x)

let { log, sin, cos } = Math;

// Generator 函数的语法
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
console.log(hw.next())
// // { value: 'hello', done: false }

// hw.next()
// // { value: 'world', done: false }

// hw.next()
// // { value: 'ending', done: true }

// hw.next()
// // { value: undefined, done: true }