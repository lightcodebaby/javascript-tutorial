'use strict';

// async means that a fucntion always returns a promise

async function f() {
    return 1;
}

f().then(console.log); // 1

async function f() {
    return Promise.resolve(1);
}

f().then(console.log); // 1

// await makes JavaScript wait until the promise settles

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    let result = await promise;

    console.log(result);
}

f();

// practical example

async function showAvatar() {
    let response = await fetch('/examples/promise-chaining/user.json');
    let user = await response.json();

    let githubResponse = await fetch(
        `https://api.github.com/users/${user.name}`
    );
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();

// catching errors

async function f() {
    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        console.log(err);
    }
}

f();

async function f() {
    let reseponse = await fetch('https://no-such-url');
}

f().catch(console.log);
