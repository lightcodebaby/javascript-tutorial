'use strict';

let user = {
    name: 'Ruben',
    age: 28,
};

console.log(Object.keys(user)); // name, age
console.log(Object.values(user)); // Ruben, 28
console.log(Object.entries(user)); // [["name", "Ruben"], ["age", 28]]

for (let value of Object.values(user)) {
    console.log(value);
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat);
