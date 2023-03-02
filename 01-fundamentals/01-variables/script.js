"use strict";

// Variables

let message = "Hellow World!";
const COLOR_RED = "#F00";

// Data types

// String
let str = "Hello";

// Number
let n = 123;

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Boolean
let isGreater = true;

// Null
let age = null;

// Undefined
let country;

// Objects and Symbols are special

// The typeof Operator

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "string"; // "string"

typeof Symbol("id"); // "Symbol"

typeof Math; // "object"

typeof null; // "object"

typeof alert; // "function"

// Interactions

// alert
alert("Hello");

// prompt
let title = "text message";
let result = prompt(title, "default");

// confirm
let question = "this is a question";
let confirm = confirm(question);

// Type Conversions

// String conversion
let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // String

// Numeric Conversion
let numberStr = "123";
alert(typeof numberStr); // string

let num = Number(str);
alert(typeof num); // number

alert("6" / "2"); // 3

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(ture)); // 1
console.log(Number(false)); // 0

// Boolean Conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log("0"); // true
