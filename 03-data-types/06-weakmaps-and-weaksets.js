'use strict';

// The difference between Map and WeakMap is that keys must be objects

let weakMap = new weakMap();

let obj = {};

weakMap.set(obj, 'ok');

// weakMap.set("string", "Error");

// Example of usage

let visitCountMap = new Map();

function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let ruben = { name: 'Ruben' };

countUser(ruben);

ruben = null; // Ruben remains in memory, it is a key in visitCountMap!!!!

visitCountMap = new WeakMap();

ruben = { name: 'Ruben' };

countUser(ruben);

ruben = null; // Garbage collected!!!!

// Another example: Using cache

// cache.js
let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = 'my calculations';

        cache.set(obj, result);
        return result;
    } else {
        return cache.get(obj);
    }
}

// main.js

obj = { name: 'Ruben' };

let result1 = process(obj);
let result2 = process(obj2);

obj = null; // Deleted from cache!!!!

// WeakSet

let visitedSet = new WeakSet();

ruben = { name: 'Ruben' };
let peter = { name: 'Peter' };
let aegon = { name: 'Aegon' };

visitedSet.add(ruben);
visitedSet.add(peter);
visitedSet.add(aegon);
visitedSet.add(ruben);

ruben = null;

console.log(visitedSet.has(ruben)); // false!!!!
