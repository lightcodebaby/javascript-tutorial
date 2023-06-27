'use strict';

// export an array
export let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
    constructor(name) {
        this.name = name;
    }
}

// export apart from declarations

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayBye, sayHi };
