'use strict';

// promises

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('error!'), 1000));
});

promise.then(
    (result) => console.log(result), // done
    (error) => console.log(error) // ignored
);

promise2.then(
    (result) => console.log(result), // ignored
    (error) => console.log(error) // error!
);

promise.then(console.log); // done (only successful completions)

promise2.then(null, console.log); // error! (only errors)

promise2.catch(console.log); // only errors

// finally block

promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('value'), 2000);
})
    .finally(() => console.log('Promise ready')) // triggers first
    .then((result) => console.log(result));

promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('error!')), 2000);
})
    .finally(() => console.log('Promise ready')) // triggers first
    .catch((err) => console.log(err));

// Practical example

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

let scriptPromise = loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
);

promise.then(
    (script) => console.log(`${script.src} is loaded`),
    (error) => console.log(`Error: ${error.message}`)
);

promise.then((script) => console.log('Another handler'));
