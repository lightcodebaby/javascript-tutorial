"use strict";

// setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi(who) {
    console.log(`Hello ${who}`);
}

setTimeout(sayHi, 1000, "Ruben");

// With arrow functions

setTimeout(() => console.log("Hello"), 1000);

// Canceling

let timerId = setTimeout(() => console.log("Hello"), 1000);
clearTimeout(timerId);

// setInterval(func|code, [delay], [arg1], [arg2], ...)

timerId = setInterval(() => console.log("tick"), 1000);
setTimeout(() => {
    clearInterval(timerId);
    console.log("stop");
}, 10000);

// Another way to run something regularly

timerId = setTimeout(function tick() {
	console.log("tick");
	timerId = setTimeout(tick, 2000);
}, 2000);

let delay = 5000;

timerId = setTimeout(function() {
	// ...send request...
	if(true) { // request failed due to server overload
		delay += 2;
	}

	timerId = setTimeout(request, delay);
}, delay);

// Right after the current script is complete

setTimeout(() => console.log("World"));

console.log("Hello");