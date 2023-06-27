'use strict';

// Get flags

let user = {
    name: 'Ruben',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
/*
 property descriptor:
 {
	"value": "Ruben",
	"writable": true,
	"enumerable": true,
	"configurable": true
 }
*/

Object.defineProperty(user, 'age', {
    value: 28,
});

descriptor = Object.getOwnPropertyDescriptor(user, 'age');

console.log(JSON.stringify(descriptor, null, 2));
/*
property descriptor:
{
   "value": 28,
   "writable": false,
   "enumerable": false,
   "configurable": false
}
*/

// Non-writable (can't be rassigned)

Object.defineProperty(user, 'name', {
    writable: false,
});

// Non-enumerable

user = {
    name: 'Ruben',
    age: 28,
    toString() {
        return this.name;
    },
};

// Multiple properties at once

Object.defineProperties(user, {
    name: { value: 'Ruben', writable: false },
    age: { value: 28, writable: true },
    surname: { value: 'Lopez Gomez', writable: false },
});

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

for (let key in user) console.log(key); // name, age, toString

Object.defineProperty(user, toString, {
    enumerable: false,
});

for (let key in user) console.log(key); // name, age
