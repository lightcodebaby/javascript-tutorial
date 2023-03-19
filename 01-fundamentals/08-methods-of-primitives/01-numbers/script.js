"use strict";

let billion = 1000000000;

let billionUnderscored = 1_000_000_000;

let billionWithE = 1e9;

let microsecond = 0.000001;

let microsecondWithE = 1e-6;

let hexadecimal = 0xff; // 255

let binary = 0b11111111; // 255

let octal = 0o377; // 255

// toString(base)

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

// Rounding

console.log(Math.floor(3.1)); // 3

console.log(Math.ceil(3.1)); // 4

console.log(Math.round(3.4)); // 3

console.log(Math.round(3.5)); // 4

console.log(Math.trunc(3.99)); // 3

// Rounding after the n-th decimal

num = 1.23456;

console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

console.log(num.toFixed(1)); // 1.2

num = 1.2;

console.log(num.toFixed(5)); // 1.20000

// Imprecise calculations

console.log(0.1 + 0.2 == 0.3); // false

console.log(0.1 + 0.2); // 0.30000000000000004

let sum = 0.1 + 0.2;

console.log(sum.toFixed(2)); // "0.30"
console.log(+sum.toFixed(2)); // 0.3

// isFinite and isNaN

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false
console.log(isFinite(Infinity)); // false

console.log(Number.isNaN("str")); // false, str is not a number
console.log(isNaN("str")); // true

console.log(Number.isFinite("123")); // false
console.log(isFinite("123")); // true

// parseInt and parseFloat

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("0xff", 16)); // 255
console.log(parseInt("ff", 16)); // 255

// Other Math functions

console.log(Math.random());

console.log(Math.max(3, 2, 5, 10, 0)); // 10
console.log(Math.min(3, 2, 5, 10, 0)); // 0

console.log(Math.pow(2, 3)); // 8
