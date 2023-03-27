"use strict";

// Creating functions

let sum = new Function("a", "b", "return a + b");

// This will return an error

function getFunc() {
    let value = "test";

    let func = new Function("console.log(value)");

    return func;
}

getFunc()(); // Error!!

// Regular behavior

function getfunc2() {
    let value = "test";

    let func = function () {
        console.log(value);
    };

    return func;
}

getfunc2()();
