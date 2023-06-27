'use strict';

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true

console.log(Object.prototype.__proto__); // null

let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__ === Object.prototype); // true

console.log(arr.__proto__.__proto__.__proto__); // null

function f() {}

console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true

// Changing native prototypes

String.prototype.show = function () {
    console.log(this);
};

'BOOM!'.show(); // BOOM! It works!

// Polyfilling is the only case where modifying native prototypes is approved

if (!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
        return new Array(n + 1).join(this);
    };
}

console.log('La'.repeat(3)); // LaLaLa

// Borrowing methods

obj = {
    0: 'Hello',
    1: 'World!',
    length: 2,
};

obj.join = Array.prototype.join;

// or

obj.__proto__ = Array.prototype;
