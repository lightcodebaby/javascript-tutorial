"use strict";

let arr = new Array();
arr = [];

let pets = ["Peter", "Aegon"];

console.log(pets[0]); // Peter

pets[0] = "Aegon";
pets[1] = "Peter";

pets[2] = "Pequeño";
pets[3] = "Tommy";

console.log(pets.length); // 4

console.log(pets); // Aegon, Peter, Pequeño, Tommy

// Arrays can contain elements of any type

arr = [
    "Apple",
    { name: "Ruben" },
    true,
    function () {
        console.log("hello");
    },
];

arr[3](); // hello

// Getting the last element

pets = ["Peter", "Aegon"];

console.log(pets[pets.length - 1]); // Aegon
console.log(pets.at(-1)); // Aegon

// pop/push, shift/unshift

arr = [0, 1, 2, 3];

arr.push(4); // 0, 1, 2, 3, 4

arr.shift(); // 1, 2, 3, 4

arr.pop(); // 1, 2, 3

arr.unshift(0); // 0, 1, 2, 3

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

console.log(fruits); // Pineapple, Lemon, Apple, Orange, Peach

// Iterating over an array

fruits = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// Bad idea

for (let key in fruits) {
    console.log(fruits[key]);
}

// Truncating arrays

fruits = ["Apple", "Orange", "Pear"];

fruits.length = 2;

console.log(fruits); // Apple, Orange

// Multidimensional arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

arr = [1, 2, 3];

// Splice

arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // From index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance"); // From index 0 remove 3 elements and insert two new elements

console.log(arr); // ["Let's", "dance", "right", "now"]

arr = ["I", "study", "JavaScript", "right", "now"];

let removed = arr.splice(0, 2); // It returns the removed elements

console.log(removed); // ["I", "study"]

arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language"); // Can be used to insert elements

console.log(arr); // ["I", "study", "complex", "language", "Javascript"]

arr = [1, 2, 5];

arr.splice(-1, 0, 3, 4);

console.log(arr);
[1, 2, 3, 4, 5];

// Slice

arr = [0, 1, 2, 3, 4];

console.log(arr.slice(0, 3)); // [0, 1, 2]

// Concat

arr = [1, 2];

console.log(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1,
};

console.log(arr.concat(arrayLike)); // 1, 2, [object Object]

arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

console.log(arr.concat(arrayLike)); // 1, 2, something, else

// forEach

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// indexOf / lastIndexOf and includes

arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

arr = ["Apple", "Orange", "Apple"];

console.log(arr.indexOf("Apple")); // 0
console.log(arr.lastIndexOf("Apple")); // 1

// find / findIndex / findLastIndex

let users = [
    { id: 1, name: "Ruben" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Aegon" },
    { id: 4, name: "Ruben" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // Ruben

console.log(users.findIndex((user) => user.name == "Ruben")); // 0
console.log(users.findLastIndex((user) => user.name == "Ruben")); // 4

// filter

users = [
    { id: 1, name: "Ruben" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Aegon" },
];

let filteredUsers = users.filter((item) => item.id > 1);

console.log(filteredUsers.length); // 2

// map

let lengths = ["Ruben", "Peter", "Aegon"].map((item) => item.length); // 5, 5, 5

// sort

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr = [1, 15, 2];

arr.sort(compareNumeric);

arr.sort((a, b) => a - b);

let countries = ["Österreich", "Andorra", "Vietnam"];

countries.sort((a, b) => a.localeCompare(b));

// reverse

arr = [1, 2, 3, 4, 5];

console.log(arr.reverse()); // 5, 4, 3, 2, 1

// split and join

arr = "Ruben, Peter, Aegon".split(", ");

let myName = "Ruben".split("");

arr = ["Ruben", "Peter", "Aegon"];

let strFromArray = arr.join(";");

console.log(strFromArray); // Ruben;Peter;Aegon

arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

result = arr.reduce((sum, current) => sum + current);

console.log(result); // 15 -> If there is no initial, reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element

// Array.isArray

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
