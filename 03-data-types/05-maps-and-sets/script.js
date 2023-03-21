"use strict"

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1)); // num1
console.log(map.get("1")); // str1

console.log(map.size);

// Map can use objects as keys

let ruben = {name: "Ruben"};

let petsCountMap = new Map();

petsCountMap.set(ruben, 2);

console.log(petsCountMap.get(ruben)); // 2

// Chaining

map = new Map();

map.set("1", "str1")
	.set(1, "num1")
	.set(true, "bool1");

// Iteration

let recipeMap = new Map([
	["cucumber", 500],
	["tomatoes", 350],
	["onion", 50]
]);

for (let vegetable of recipeMap.keys()) {
	console.log(vegetable); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()){
	console.log(amount); // 500, 350, 50
}

for (let entry of recipeMap) {
	console.log(entry); // cucumber,500 etc
}

recipeMap.forEach((value, key, map) => {
	console.log(`${key}: ${value}`)
});

let obj = {
	name: "Ruben",
	age: 28,
}

let objMap = new Map(Object.entries(obj));

console.log(map.get("name")); // Ruben

recipeMap = new Map([
	["cucumber", 500],
	["tomatoes", 350],
	["onion", 50]
]);

obj = Object.fromEntries(recipeMap);

console.log(obj["cucumber"]); // 500