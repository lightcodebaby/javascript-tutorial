"use strict"

// window = [DOM, BOM, JavaScript]

function sayHi() {
	console.log("Hello");
}

window.sayHi();

// DOM (Document Object Model)

console.log(window.innerHeight);

document.body.style.background = "red";

setTimeout(() => document.body.style.background = "", 1000);

// BOM (Browser Object Model)

console.log(location.href);
if(confirm("Go to Wikipedia?")) {
	location.href = "https://wikipedia.org";
}
