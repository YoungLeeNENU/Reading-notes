/**
 * @fileOverview ... syntax
 * @name spread-rest.js
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
'use strict';

// Split
function foo(x, y, z) {
	console.log(x, y, z);
}

foo(...'abcdefgf');    // 只要参数可迭代就可以，是另一种 apply 的方式

// Concat
{ let a = [2, 3, 4],
      b = [1, ...a, 5, 6];
  
  console.log(b);
}

// 和函数的 arguments 不同，z 是一个彻底的 array
function bar(...z) {
	z.shift();    // Array operations
	console.log(...z);
}

bar(1, 2, 3, 4, 5);
