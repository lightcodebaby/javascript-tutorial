"use strict";

// Code blocks

{
    let message = "Hello";
    console.log(message);
}

{
    let message = "Goodbye";
    console.log(message);
}

// Nested functions

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
}

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
