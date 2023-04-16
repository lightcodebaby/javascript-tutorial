"use strict"

function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
	return a + b;
}

let curriedSum = _.curry(sum);

console.log(sum(1, 2));
console.log(curriedSum(1)(2));

// real life example

function log(date, importance, message) {
	console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = _.curry(log);

let logNow = log(new Date());

logNow("INFO", "message"); // [HH:mm] [INFO] message

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] [DEBUG] message