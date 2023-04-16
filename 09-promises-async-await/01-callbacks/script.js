"use strict"

// what will not work

function loadScript(src) {
	let script = document.createElement('script');
	script.src = src;
	document.head.append(script);
}

loadScript("/my/script.js");

newScriptFunction(); // there is not such function, yet!

// what will work

function loadScript(src, callback) {
	let script = document.createElement('src');
	script.src = src;

	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Script load error for ${src}`));

	document.head.append(script);
}

loadScript("/my/script.js", function(error, script) {
	if(error) {
		console.log(`Script load error for ${src}`);
	} else {
		console.log(`Script loaded successfully for ${src}`);
		newScriptFunction();
	}
});

// a real example

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  console.log(`Cool, the script ${script.src} is loaded`);
  console.log( _ ); // _ is a function declared in the loaded script
});