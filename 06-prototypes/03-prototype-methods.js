'use strict';

let animal = {
    eats: true,
};

let rabbit = Object.create(animal); // same as {__proto__: animal}

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {});

rabbit = Object.create(animal, {
    jumps: {
        value: true,
    },
});

console.log(rabbit.jumps); // true

// Cloning objectPosition:
let clone = Object.create(
    Object.getPrototypeOf(rabbit),
    Object.getOwnPropertyDescriptors(rabbit)
);

// Creating objects without prototype

let obj = Object.create(null);

console.log(obj); // Error, no toString!
