"use strict";

// Function name

function sayHiDeclaration() {
    console.log("Hi");
}

console.log(sayHiDeclaration.name);

let sayHiExpression = function () {
    console.log("Hi");
};

console.log(sayHiExpression.name);

// Function length

function f1(a) {}
function f2(a, b) {}
function f3(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(f3.length); // 2

// More complex example

function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) {
                handler();
            } else {
                handler(isYes);
            }
        }
    }
}

ask(
    "Question",
    () => console.log("You said yes"),
    (result) => console.log(result)
);

// Custom properties

function sayHiWithProperties() {
    console.log("Hi");

    sayHi.counter++;
}

sayHiWithProperties.counter = 0;

sayHiWithProperties();
sayHiWithProperties();

console.log(`Called ${sayHiWithProperties.counter} times`);

// Rewrite previous chapter makeCounter() function

function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

counter.count = 10;

console.log(counter()); // 10

// Named Function Expression, NFE

let sayHiNFE = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest");
    }
};

let welcome = sayHiNFE;
sayHiNFE = null;

welcome();
