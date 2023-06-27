'use strict';

let user = {
    firstName: 'Ruben',
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    },
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

// How to fix it??

setTimeout(function () {
    user.sayHi();
}, 1000);

setTimeout(() => user.sayHi(), 1000);

// But what if user changes before setTimeout triggers??

function func() {
    console.log(this.firstName); // Undefined if not binded
}

let funcUser = func.bind(user);
funcUser(); // "Ruben"

let sayHi = user.sayHi.bind(user);

setTimeout(sayHi, 1000); // Hello, Ruben! -> Even if user.firstName changes!

user = {
    firstName: 'Ruben',
    say(phrase) {
        console.log(`${phrase}, ${this.firstName}!`);
    },
};

let say = user.say.bind(user);

say('Hello'); // Hello, Ruben!
say('Bye'); // Bye, Ruben!

// bindAll

for (let key in user) {
    if (typeof key == 'function') {
        user[key] = user.key.bind(user);
    }
}

// Binding arguments

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3));
console.log(double(4));

let triple = mul.bind(null, 3);

console.log(triple(3));
console.log(triple(4));

// Binding only arguments and not context

function partial(func, ...argsBound) {
    return function () {
        return func.call(this, ...argsBound, ...args);
    };
}

user = {
    firstName: 'Ruben',
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}`);
    },
};

user.sayNow = partial(
    user.say,
    new Date().getHours() + ':' + new Date().getMinutes
);

user.sayNow('Hello'); // [10:00] Ruben: Hello
