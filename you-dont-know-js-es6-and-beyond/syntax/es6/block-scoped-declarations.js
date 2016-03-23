/**
 * @fileOverview for block scope
 * @name block-scoped-declarations.js<you-dont-know-js-es6-and-beyond/syntax/es6>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
'use strict';

for (let a = 0,
         b = '42',
         c = {
             test: true
         },
         blockScope = 0; blockScope < 1; blockScope++) {
             // logic in this block scope
             console.log(a, b, c);
}

console.log(a);    // Referrence Error
