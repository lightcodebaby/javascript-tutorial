"use strict"

// html tag

console.log(document.documentElement);

// body tag

console.log(document.body);

// head tag

console.log(document.head);

// child nodes

for(let i = 0; i < document.body.childNodes.length; i++) {
	console.log(document.body.childNodes[i]);
}

for(let node of document.body.childNodes) {
	console.log(node); // childNodes is a collection, a pecial array-like object
}

console.log(Array.from(document.body.childNodes).filter);

// siblings

console.log(document.body.parentNode === document.documentElement);

console.log(document.head.nextSibling);

console.log(document.body.previousSibling);

// only element nodes

for(let elem of document.body.children) {
	console.log(elem);
}