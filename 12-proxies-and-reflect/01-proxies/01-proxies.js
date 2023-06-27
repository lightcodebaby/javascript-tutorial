'use strict';

let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test); // 5

console.log(proxy.test); // 5

for (let key in proxy) console.log(key); // test

/*

Handler parameters:

Internal Method						Handler Method						Triggers When...

[[Get]]								get									reading a property
[[Set]]								set									writing to a property
[[HasProperty]]						has									in operator
[[Delete]]							deleteProperty						delete operator
[[Call]]							apply								function call
[[Construct]]						construct							new operator
[[GetPrototypeOf]]					getPrototypeOf						Object.getPrototypeOf
[[SetPrototypeOf]]					setPrototypeOf						Object.setPrototypeOf
[[IsExtensible]]					isExtensible						Object.isExtensible
[[PreventExtensions]]				preventExtensions					Object.preventExtensions
[[DefineOwnProperty]]				defineProperty						Object.defineProperty, Object.defineProperties
[[GetOwnProperty]]					getOwnPropertyDescriptor			Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]]					ownKeys								Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries	

*/

// default value with get trap

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    },
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // 0

let dictionary = {
    Hello: 'Hola',
    Bye: 'Adiós',
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    },
});

console.log(dictionary['Hello']); // Hola
console.log(dictionary['Welcome']); // Welcome

// validation with set trap

numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    },
});

numbers.push(1);
numbers.push(2);
console.log('Length is: ' + numbers.length);

numbers.push('test'); // TypeError and the script dies

console.log('This line will never be be executed');

// iteration wih ownKeys

let user = {
    name: 'Ruben',
    age: 28,
    _password: '****',
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith('_'));
    },
});

for (let key in user) console.log(key); // name, age

console.log(Object.keys(user));
console.log(Object.values(user));

// getOwnPropertyDescriptor

user = {};

user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true,
            //
        };
    },
});

console.log(Object.keys(user)); // a, b, c

// protected properties

user = {
    name: 'Ruben',
    _password: '****',
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access denied');
        }
        let value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
    },
    set(target, prop, value) {
        if (prop.startsWith('_')) {
            throw new Error('Access denied');
        } else {
            target[prop] = value;
            return true;
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access denied');
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith('_'));
    },
});

try {
    console.log(user._password); // Error: Access denied
} catch (err) {
    console.log(err.message);
}

try {
    user._password = '1234'; // Error: Access denied
} catch (err) {
    console.log(err.message);
}

try {
    delete user._password; // Error: Access denied
} catch (err) {
    console.log(err.message);
}

for (let key in user) console.log(key); // name

// in range with has trap

let range = {
    start: 1,
    end: 10,
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    },
});

console.log(5 in range); // true
console.log(50 in range); // false

// delay with proxy

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        },
    });
}

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

sayHi('Ruben'); // Hello, Ruben! After 3 seconds
