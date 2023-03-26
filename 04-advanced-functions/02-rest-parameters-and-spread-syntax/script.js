"use strict";

// Rest parameters ...

function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6));

function showFamily(firstName, lastName, ...family) {
    console.log(firstName + " " + lastName);
    console.log(family[0]);
    console.log(family[1]);
    console.log(family[2]);
    console.log(family.length);
}

showFamily("Ruben", "Lopez Gomez", "Peter", "Aegon", "Mama");

function showName() {
    console.log(arguments.length);
    console.log(arguments[0] + " " + arguments[1]);
}

showName("Ruben", "Lopez Gomez");

// Spread Syntax

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

console.log(Math.max(...arr1, ...arr2));

let merged = [0, ...arr1, ...arr2, 9];

let str = "Hello";

console.log([...str]);
console.log(Array.from(str));

// Copying arrays and objects

let arr = [1, 2, 3];

let arrCopy = [...arr];

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

let objCopy = {...obj};
