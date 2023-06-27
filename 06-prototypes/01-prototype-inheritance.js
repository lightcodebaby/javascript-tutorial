'use strict';

let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.jumps); // true
console.log(rabbit.eats); // true

animal = {
    eats: true,
    walk() {
        console.log('Animal walk');
    },
};

rabbit = {
    jumps: true,
    __proto__: animal,
};

rabbit.walk(); // Animal walk

rabbit.walk = function () {
    console.log('Rabbit! Bounce-bounce!');
};

rabbit.walk(); // Rabbit! Bounce-bounce!

// Getters and setters

let user = {
    name: 'Ruben',
    surname: 'LopezGomez',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return this.name + ' ' + this.surname;
    },
};

let admin = {
    isAdmin: true,
    __proto__: user,
};

console.log(admin.fullName); // Ruben LopezGomez

admin.fullName = 'Peter Aegon';

console.log(admin.fullName); // Peter Aegon
console.log(user.fullName); // Ruben LopezGomez

// The value of this

animal = {
    walk() {
        if (!this.isSleeping) {
            console.log('I walk');
        }
    },

    sleep() {
        this.isSleeping = true;
    },
};

rabbit = {
    name: 'White rabbit',
    jumps: true,
    __proto__: animal,
};

rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined

console.log(Object.keys(rabbit)); // Only name and jumps!

for (let prop in rabbit) {
    // All the properties
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}

// F.prototype

animal = {
    eats: true,
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('Grey rabbit');

console.log(rabbit.eats); // true

// Default F.prototype

function Rabbit() {
    /* By default
	Rabbit.prototype = {constructor: Rabbit};
	*/
}

let rabbit = new Rabbit();

console.log((rabbit.prototype = Rabbit)); // true

// Creating two objects with the same constructor without knowing which constructor was used for the first one

function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit('White rabbit');
let rabbit = new rabbit.constructor('Grey rabbit');

// Last two possibilities

function Rabbit() {
    Rabbit.prototype.jumps = true;
}

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit,
};
