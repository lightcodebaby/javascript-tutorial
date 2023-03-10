"use strict"

// Object constructor

let user = new Object();

user = {
	name: "Ruben",
	age: 28,
};

console.log(user.name); // Ruben

// Add properties to objects

user.isAdmin = true;

// Delete properties from objects

delete user.age;

// set

user["job"] = "Backend engineer";

// get

console.log(user["job"]);

// set with key

let key = "loveDogs";
user[key] = true;

// Computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit]: 5,
}

alert(bag.apple);

fruit = promt("Which fruit to buy?", "apple");
bag = {};

bag[fruit] = 5;

// Short handed properties

function createUser(name, age) {
	return {
		name: name,
		age: age,
	};
}

let newUser = createUser("Ruben", 28);
console.log(newUser.name);


function createUser2(name, age) {
	return {
		name,
		age: age,
	};
}

newUser = createUser2("Ruben", 28);
console.log(newUser.name);

// Property existence

let userWithoutProperties = {};

console.log(userWithoutProperties.noSuchProperty === undefined);

user = {name: "Ruben", age: 28};

console.log("age" in user);
console.log("blablabla" in user);

key = "blablabla";
console.log(key in user);

let weirdObjectBehaviour = {test: undefined};

console.log(weirdObjectBehaviour.test);
console.log("test" in weirdObjectBehaviour);

// The for...in loop

user = {
	name: "Ruben",
	age: 28,
	isAdmin: true,
};

for (let key in user) {
	console.log(key);
	console.log(user[key]);
}

let codes = {
	"49": "Germany",
	"34": "Spain",
	"1": "USA",
};

for(let code in codes) {
	console.log(code); // 1, 34, 49
}
