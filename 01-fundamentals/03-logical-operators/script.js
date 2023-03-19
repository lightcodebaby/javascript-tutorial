"use strict";

// Conditional branching: if, '?'

let letters = prompt("How many letters does the word Javascript have?");

if (letters == 10) console.log("You are right!");

if (letters == 10) {
    console.log("That's correct!");
    console.log("You're so smart!");
}

if (0) {
    console.log("0 is falsy");
}

if (1) {
    console.log("1 is truthy");
}

let cond = letters == 10;

if (cond) {
}

if (letters < 10) {
    console.log("Javascript has more letters!");
} else if (letters > 10) {
    console.log("Javascript has less letters");
} else {
    console.log("Exactly!");
}

let correct = letters == 10 ? true : false;

// Logical

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (1 || 0) {
    console.log("truthy!");
}

console.log(true || true); // true
console.log(false || true); // false
console.log(true || false); // false
console.log(false || false); // false

if (1 && 0) {
    console.log("this won't work, 0 is falsy!");
}

console.log(!true); // false

// Nullish coalescing operator

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
