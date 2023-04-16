"use strict";

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(one); // {value: 1, done: false}

let two = generator.next();
console.log(two); // {value: 2, done: false}

let three = generator.next();
console.log(three); // {value: 3, done: true}

generator = generateSequence();

for (let value of generator) {
    console.log(value); // 1, 2 because it ignores when done: true!!!
}

let sequence = [0, ...generateSequence()];

console.log(sequence); // 0, 1, 2, 3

// working with ranges

let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    },
};

console.log([...range]);

// generator composition

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
    // 0...9
    yield* generateSequence(48, 57);

    // A...Z
    yield* generateSequence(65, 90);

    // a...z
    yield* generateSequence(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

console.log(str);

//

function* gen() {
    let ask1 = yield "2 + 2 = ?";

    console.log(ask1);

    let ask2 = yield "3 * 3 = ?";

    console.log(ask2);
}

generator = gen();

console.log(generator.next().value); // 2 + 2 = ?

console.log(generator.next(4).value); // 3 * 3 = ?

console.log(generator.next(9).done); // true

// throwing errors

function* generate() {
    let result = yield "2 + 2 = ?";
}

generator = generate();

let question = generator.next().value;

try {
    generator.throw(new Error("The answer is not found in my database"));
} catch (e) {
    console.log(e);
}

// returning values

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

g.nexy(); // {value: 1, done: false}
g.return("returned"); // {value: "returned", done: true}
g.next(); // {value: undefined, done: true}
