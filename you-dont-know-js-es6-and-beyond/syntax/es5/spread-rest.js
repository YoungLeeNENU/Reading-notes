/**
 * @fileOverview ... syntax
 * @name spread-rest.js
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
'use strict';

// Split

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function foo(x, y, z) {
  console.log(x, y, z);
}

foo.apply(undefined, _toConsumableArray('abcdefgf')); // 只要参数可迭代就可以，是另一种 apply 的方式

// Concat
{
  var a = [2, 3, 4],
      b = [1].concat(a, [5, 6]);

  console.log(b);
}

// 和函数的 arguments 不同，z 是一个彻底的 array
function bar() {
  var _console;

  for (var _len = arguments.length, z = Array(_len), _key = 0; _key < _len; _key++) {
    z[_key] = arguments[_key];
  }

  z.shift();
  (_console = console).log.apply(_console, z);
}

bar(1, 2, 3, 4, 5);