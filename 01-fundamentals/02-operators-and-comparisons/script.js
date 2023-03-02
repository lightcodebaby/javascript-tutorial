"use strict";

let x = 1;

x = -x;
console.log(x); // -1

/*
Math operations:
- Addition: +
- Substraction: -
- Multiplication: *
- Division: /
- Remainder: %
- Exponentiation: **
*/

console.log(5 % 2); // 1
console.log(2 ** 3); // 8

// String concatenation with +
let s = "my" + " " + "string";
console.log(s); // "my string"

console.log("1" + 2); // "12"
console.log(2 + 2 + "1"); // "41"

// Numeric conversion with +
console.log(+true); // 1
console.log(+""); // 0

// Chaining assignments
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log(c); // 0

a = b = c = 2 + 2;

console.log(c); // 4

// Increment and decrement
let counter = 0;

counter++;
console.log(counter); // 1

counter--;
console.log(counter); // 0

console.log(counter++); // 0
console.log(++counter); // 2

counter = 1;
console.log(2 * ++counter); // 4

counter = 1;
console.log(2* counter++); // 2

/*
Bitwise operators:
- AND: &
- OR: |
- XOR: ^
- NOT: ~
- LEFT SHIFT: <<
- RIGHT SHIFT: >>
- ZERO-FILL RIGHT SHIFT: >>>
*/