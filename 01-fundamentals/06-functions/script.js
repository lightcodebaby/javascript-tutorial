"use strict";

// Function declarations

function showMessageWithoutDefault(from, text) {
    console.log(from + ": " + text);
}

showMessageWithoutDefault("Sender"); // Sender: undefined

function showMessageWithDefault(from, text = "no text given") {
    console.log(from + ": " + text);
}

showMessageWithDefault("Sender"); // Sender: no text given

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from you parents?");
    }
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log("Showing you the movie");
}

// A FUNCTION IS A VALUE!!!!

console.log(showMovie);

// Function expressions

let sayHi = function () {
    console.log("Hello");
};

sayHi();

// Callbacks

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    console.log("You agreed");
}

function showCancel() {
    console.log("You cancelled");
}

ask("Do you agree?", showOk, showCancel);

let age = 17;

let welcome =
    age < 18
        ? function () {
              console.log("Bye");
          }
        : function () {
              console.log("Hello");
          };

// Array functions

let sum = (a, b) => {
    let result = a + b;
    return result;
};

let double = (n) => n * 2;
