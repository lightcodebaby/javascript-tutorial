"use strict";

class Rabbit {}

let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true
console.log(new Rabbit() instanceof Rabbit); // true

let arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// Customizing it

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };

console.log(obj instanceof Animal); // true

// Changing [object Object]

let objectToString = Object.prototype.toString;

arr = [];

console.log(objectToString.call(arr)); // [object Array] !!!

let user = {
    [Symbol.toStringTag]: "User",
};

console.log({}.toString.call(user)); // [object User] !!!
