'use strict';

let user = {
    name: 'Ruben',
    surname: 'Lopez Gomez',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = [
            value.split(' ')[0],
            value.split(' ')[1] + ' ' + value.split(' ')[2],
        ];
    },
};

console.log(user.fullName);

// Smarter getters and setters wrapping over real properties

user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short');
            return;
        } else {
            this._name = value;
        }
    },
};

user.name = 'Ruben';
console.log(user.name);

// Changing properties

function User(name, age) {
    this.name = name;
    this.age = age;
}

let ruben = new User('Ruben', 28);

console.log(ruben.age);

// What if we change age to birthday?

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        },
    });
}

ruben = new User('Ruben', new Date(1994, 7, 11));

console.log(ruben.birthday);
console.log(ruben.age);
