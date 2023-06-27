'use strict';

let range = {
    from: 1,
    to: 10,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        },
    };
};

for (let num of range) {
    console.log(num);
}

// Another way

range = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    },
};

for (let num of range) {
    console.log(num); // We can't have two or more for..of loops running over the object simultaneously
}

// Strings are iterable

for (let char of 'Ruben') {
    console.log(char); // r, u, b, e, n
}

// Using an iterator explicitly

let str = 'Ruben';

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// Iterable but no array-like

range = {
    from: 1,
    to: 10,
};

// Array-like but no iterable

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2,
};

// Array.from

let arr = Array.from(arrayLike);

console.log(arr); // Hello, world

arr = Array.from(range, (num) => num * num);

console.log(arr); // 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

str = 'Ruben';

let chars = Array.from(str);
