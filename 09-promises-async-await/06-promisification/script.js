"use strict";

// promisification is the conversion of a function that accepts a callback into a function that returns a promise

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);

            f.call(this, ...args);
        });
    };
}

let loadScriptPromise = promisify(loadScript, true);
loadScriptPromise("my-script.js").then(
    (arrayOfResults) => console.log(),
    (err) => console.log()
);
