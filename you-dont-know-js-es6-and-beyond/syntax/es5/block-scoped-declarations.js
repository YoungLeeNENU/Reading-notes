/**
 * @fileOverview for block scope
 * @name block-scoped-declarations.js<you-dont-know-js-es6-and-beyond/syntax/es6>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
'use strict';

for (var _a = 0, b = '42', c = {
    test: true
}, blockScope = 0; blockScope < 1; blockScope++) {
    // logic in this block
    console.log(_a, b, c);
}

console.log(a);