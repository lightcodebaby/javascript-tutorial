'use strict';

// Class basic syntax

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

let user = new User('Ruben');
user.sayHi();

// class are functions

console.log(typeof User); // function

console.log(User === User.prototype.constructor); // true

console.log(User.prototype.sayHi); // The code

console.log(Object.getOwnPropertyDescriptors(User.prototype)); // constructor, sayHi

// Class expressions

let User = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
};

new User().sayHi(); // works

console.log(MyClass); // error

// Dynamically on-demand classes

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

let User = makeClass('Hello');

new User().sayHi(); // Hello

// Getters and setters

class User {
    constructor(name) {
        this.name = name; // invokes the setter
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short');
            return;
        } else {
            this._name = value;
        }
    }
}

user = new User('Ruben');
console.log(user.name); // Ruben

class User {
    name = prompt('Name, please?', 'Ruben');
}

user = new User();
console.log(user.name);

console.log(User.prototype.name); // undefined

// Bounding methods with class fields

class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button = new Button('Hello');

setTimeout(button.click, 1000); // undefined!

setTimeout(() => button.click(), 1000); // works

// Another way to do the same

class Button {
    constructor(value) {
        this.value = value;
    }

    click = () => {
        console.log(this.value);
    };
}

button = new Button('Hello');

setTimeout(button.click, 1000); // works
