'use strict';

// catch can be at the end of the chain

fetch('/article/promise-chaining/user.json')
    .then((response) => response.json())
    .then((user) => fetch(`https://api.github.com/users/${user.name}`))
    .then((response) => response.json())
    .then(
        (githubUser) =>
            new Promise((resolve, reject) => {
                let img = document.createElement('img');
                img.src = githubUser.avatar_url;
                img.className = 'promise-avatar-example';
                document.body.append(img);

                setTimeout(() => {
                    img.remove();
                    resolve(githubUser);
                }, 3000);
            })
    )
    .catch((error) => console.log(error.message));

// these two blocks are the same

new Promise((resolve, reject) => {
    throw new Error('Whoops!');
}).catch(console.log); // Error: Whoops!

new Promise((resolve, reject) => {
    reject(new Error('Whoops!'));
}).catch(console.log); // Error: Whoops!

// catch also catches errors in the handlers

new Promise((resolve, reject) => {
    resolve('ok');
})
    .then((result) => {
        blabla();
    })
    .catch(console.log); // ReferenceError: blabla is not defined

// rethrowing errors

new Promise((resolve, reject) => {
    throw new Error('error!');
})
    .catch(function (error) {
        console.log('Error is handled');
    })
    .then(() => console.log('Successful handler runs!'));

new Promise((resolve, reject) => {
    throw new Error('error!');
})
    .catch(function (error) {
        if (error instanceof URIError) {
        } else {
            console.log("Can't handle this error!");
            throw error;
        }
    })
    .then(function () {
        console.log('This block will neve run!');
    })
    .catch(function (error) {
        console.log(`Unknown error has occured: ${error}`);
    });

// unhandled rejections

new Promise(function (resolve, reject) {
    noSuchFunction();
}).then((resolve) => console.log('This code will never run'));

window.addEventListener('unhandledrejection', function (event) {
    console.log(event.promise);
    console.log(event.reason);
});

new Promise(function (resolve, reject) {
    throw new Error('error!');
});
