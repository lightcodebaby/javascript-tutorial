'use strict';

let user = {};

Reflect.set(user, 'name', 'Ruben');

console.log(user.name); // Ruben

user = {
    name: 'Ruben',
};

user = new Proxy(user, {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, val, receiver) {
        console.log(`SET ${prop}=${val}`);
        return Reflect.set(target, prop, val, receiver);
    },
});

let name = user.name; // shows get name
user.name = 'Not Ruben'; // shows set name

// proxying a getter

user = {
    _name: 'Ruben',
    get name() {
        return this._name;
    },
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    },
});

let admin = {
    __proto__: userProxy,
    _name: 'Admin',
};

console.log(admin.name); // Admin

// working with maps

let map = new Map();

map = new Proxy(map, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    },
});

proxy.set('test', 1);
console.log(proxy.get('test')); // 1

// private fields

class User {
    #name = 'Guest';

    getName() {
        return this.#name;
    }
}

user = new User();

user = new Proxy(user, {});

console.log(user.getName()); // Error!

user = new User();

user = new Proxy(user, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    },
});

console.log(user.getName()); // Guest!
