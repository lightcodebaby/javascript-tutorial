"use strict";

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
};

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

user = { name: "Ruben", age: 28 };

console.log("age" in user);
console.log("blablabla" in user);

key = "blablabla";
console.log(key in user);

let weirdObjectBehaviour = { test: undefined };

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
    49: "Germany",
    34: "Spain",
    1: "USA",
};

for (let code in codes) {
    console.log(code); // 1, 34, 49
}

// Object copy

let userToCopy = { name: "Ruben" };

let adminCopied = userToCopy;

adminCopied.name = "Ruben2";

console.log(userToCopy.name); // Ruben2

// Object cloning

let userToClone = {
    name: "Ruben",
    age: 28,
};

let clone = {};

for (let key in userToClone) {
    clone[key] = user[key];
}

clone.name = "Ruben2";

console.log(userToClone.name); // Still Ruben

// Object assign

let userToAssign = { name: "Ruben" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(userToAssign, permissions1, permissions2);

console.log(userToAssign.name); // Ruben
console.log(userToAssign.canView); // true
console.log(user.canEdit); // true

Object.assign(userToAssign, { name: "Ruben2" }); // Override

console.log(userToAssign.name); // Ruben2

clone = Object.assign({}, userToAssign); // Object cloning with assign method

// What happens when an object property is an object itself?

user = {
    name: "Ruben",
    sizes: {
        height: 185,
        width: 102,
    },
};

clone = structuredClone(user);

// Object methods

user = {
    name: "Ruben",
    age: 28,
};

user.sayHi = function () {
    console.log("Hello!");
};

user.sayHi();

let userShortHand = {
    sayHi() {
        console.log("Hello");
    },
};

user = {
    name: "Ruben",
    age: 28,
    printName() {
        console.log(this.name);
    },
};

// Using this out of an object

user = { name: "Ruben" };
let user2 = { name: "Ruben2" };

function printName() {
    console.log(this.name);
}

user.f = printName;
user2.f = printName;

user.f(); // Ruben
user2.f(); // Ruben2

// Arrow functions

user = {
    firstName: "Ruben",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    },
};

user.sayHi(); // Ruben

// Constructors and "new" operator

// Reusable

function User(name) {
    console.log(new.target); // Check if the function was called with or without new operator
    this.name = name;
    this.isAdmin = false;
}

user = new User("Ruben");

console.log(user.name);
console.log(user.isAdmin);

// Not reusable

user = new (function () {
    this.name = "Ruben";
    this.isAdmin = false;

    // Complext code
})();

// Methods in constructor

function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is: " + this.name);
    };
}

user = new User("Ruben");

user.sayHi(); // My name is: Ruben

// Optional chaining for non existing properties

user = {};

console.log(user?.address?.street);

let html = document.querySelector(".elem")?.innerHTML;

let userAdmin = {
    admin() {
        console.log("I am admin");
    },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // Nothing happens

key = "firstName";

let user1 = {
    firstName: "Ruben",
};

user2 = null;

console.log(user1?.[key]); // Ruben
console.log(user2?.[key]); // Undefined

delete user?.name;

// Object to primitive

user = {
    name: "Ruben",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
};

console.log(user); // hint: string -> {name: "Ruben"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

/*
By default, objects have the following conversion methods:
toString() -> [object Object]
valueOf() -> the object itself
*/

user = {
    name: "Ruben",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    },
};

console.log(user); // toString -> {name: "Ruben"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500
