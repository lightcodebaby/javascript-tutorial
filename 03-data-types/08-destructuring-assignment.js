'use strict';

// Detructuring array into variables

let arr = ['Ruben', 'Lopez Gomez'];

let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

// Ignoring using commas

arr = ['Ruben', 'Lopez Gomez', 'Software Engineer'];

let [myName, , jobTitle] = arr;

// Works with any iterable on the right-side

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

// Can be assigned to anything at the left-side

let user = {};
[user.name, user.surname] = 'Ruben LopezGomez'.split(' ');

// Destructuring with .entries()

user = {
    name: 'Ruben',
    age: 28,
};

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// Destructuring with Map is simpler

user = new Map();
user.set('name', 'Ruben');
user.set('age', 28);

for (let [key, value] of user) {
    console.log(`${key}: ${value}`);
}

// Swapping variables without using aux

let pet1 = 'Peter';
let pet2 = 'Aegon';

[pet1, pet2] = [pet2, pet1];

// Store ignored values

let [name1, name2, name3, ...rest] = [
    'Ruben',
    'Peter',
    'Aegon',
    'Maria Sol',
    'Antonio',
];

console.log(rest[0]); // Maria Sol
console.log(rest[1]); // Antonio

// Default values

let [var1, var2] = [];

console.log(var1); // undefined
console.log(var2); // undefined

let [default1 = 'Guest', default2 = 'Anonymous'] = ['Ruben'];

console.log(default1); // Ruben
console.log(default2); // Anonymous

// Destructuring objects

let options = {
    title: 'Menu',
    width: 100,
    height: 200,
};

let { width: w, height: h, title } = options;

let { title2, ...rest2 } = options;

console.log(rest2.width); // 100
console.log(rest2.height); // 200

// Destructuring with already existing variables

({ width, height, title } = options);

// Nested destructuring

options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true,
};

let {
    size: { width3, height3 },
    items: [item1, item2],
    title3 = 'Menu',
} = options;

// Smart function parameters

options = {
    title: 'My menu',
    items: ['Item1', 'Item2'],
};

function showMenu({
    title = 'Untitled',
    width = 200,
    height = 100,
    items = [],
} = {}) {
    console.log(`${title} ${width} ${height}`); // My menu, 200, 100
    console.log(items); // Item1, Item2
}

showMenu(options);

// More complex

function showMenu({
    title = 'Untitled',
    width: w = 100,
    height: h = 200,
    items: [item1, item2],
}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);
