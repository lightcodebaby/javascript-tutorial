"user strict";

// CPU-heavy function

function slow(x) {
    console.log(`Called with ${x}`);
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        } else {
            let result = func(x);

            cache.set(x, result);
            return result;
        }
    };
}

slow = cachingDecorator(slow); // Reusable!!

console.log(slow(1)); // cached and result returned
console.log(slow(1)); // result returned from cache

// Setting this inside a function

function say(phrase) {
    console.log(this.name + ": " + phrase);
}

let user = { name: "Ruben" };

say.call(user, "Hello");

// More complex example

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log("Called with: " + x);
        return x * this.someMethod();
    },
};

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        } else {
            result = func.call(this, x);
            cache.set(x, result);
            return result;
        }
    };
}

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));

// Let's make cachingDecorator more universal, going multi-argument!

let worker = {
    slow(min, max) {
        console.log(`Called with ${min}, ${max}`);
        return min + max; // CPU-heavy assumed
    },
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = func.call(this, ...arguments);

            cache.set(key, result);
            return result;
        }
    };
}

function hash(args) {
    return args[0] + "," + args[1];
}

worker.slow(cachingDecorator(worker.slow, hash));

console.log(worker.slow(3, 5)); // Calculated
console.log(worker.slow(3, 5)); // From cache

// func.apply

let wrapper = function () {
    return func.apply(this, arguments);
};

// Method borrowing

function hash(args) {
    return [].join.call(arguments);
}
