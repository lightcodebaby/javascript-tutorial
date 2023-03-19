"use strict";

// These are the same

let single = "quotes";

let double = "quotes";

// This allows us to embed expressions and to span strings multiple lines

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);

let petList = `Pets:
* Peter
* Aegon
`;

console.log(petList);

/*
Special characters:

\n -> new line
\', \", \` -> quotes
\\ -> backslash
\t -> tab
*/

// String length

console.log("Ruben".length);

// Accessing characters

let myName = "Ruben";

console.log(myName.at[0]); // R

console.log(myName.at[myName.length - 1]); // n
console.log(myName.at[-1]); // n

for (let char of myName) {
    console.log(char);
}

// Changing the case

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

// Searching for a substring

let str = "Hello, my name is Ruben";

console.log(str.indexOf("ello")); // 1
console.log(str.indexOf("asdas")); // -1 -> not found
console.log(str.indexOf(" ", 7)); // 9 -> next occurrence

console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("Ruben")); // true

console.log(str.includes("my name is", 4)); // true

// Getting a substring

str = "0123456789";

console.log(str.slice(0, 1)); // 0
console.log(str.slice(4)); // 456789
console.log(str.slice(-4, -1)); // 678

console.log(str.substring(2, 7)); // 23456

console.log(str.substr(2, 4)); // 2345

// Comparing strings

console.log("a" > "Z"); // true

console.log("Ö" > "Z"); // true!!

console.log("Ö".localeCompare("Z")); // -1
