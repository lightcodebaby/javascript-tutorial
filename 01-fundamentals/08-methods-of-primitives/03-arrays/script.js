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
	{name: "Ruben"},
	true,
	function() {console.log("hello");},
]

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

for(let i = 0; i < fruits.length; i++) {
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
	[7, 8, 9]
]

arr = [1, 2, 3];