"use strict";
var greet;
//greet = 'hello';
greet = function () {
    console.log('Hello Gtm!');
};
greet();
var add = function (a, b, c) {
    if (c === void 0) { c = 12; }
    console.log(a + b);
    console.log(c);
};
add(2, 8, 'KLM');
var minus = function (a, b) {
    return (a - b);
};
var result = minus(10, 7);
console.log(result);
