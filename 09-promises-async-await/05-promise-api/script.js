"use strict";

// running multiple promises at once

Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log);

// practical example

let names = ["rvbenlg", "rubenlg94"];

let requests = names.map((name) =>
    fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
    .then((responses) => {
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }

        return responses;
    })
    .then((responses) =>
        Promise.all(responses.map((response) => response.jsonm()))
    )
    .then((users) => users.forEach((user) => console.log(user.name)));

// in case one request fails and if we are still interested in the others

let urls = [
    "https://api.github.com/users/rvbenlg",
    "https://api.github.com/users/rubenlg94",
    "https://bla-bla-bla",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
    results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            console.log(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            console.log(`${urls[num]}: ${result.reason}`);
        }
    });
});

// if the browser doesn't support Promise.allSettled

if (!Promise.allSettled) {
    const rejectHandler = (reason) => ({ status: "rejected", reason });

    const resolveHandler = (value) => ({ status: "fulfilled", value });

    Promise.allSettled = function (promises) {
        const convertedPromises = promises.map((promise) =>
            Promise.resolve(promise).then(resolveHandler, rejectHandler)
        );
        return Promise.all(convertedPromises);
    };
}

// to wait only for the first settled promise

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Whoops!")), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1

// to wait only for the first fulfilled promise

Promise.any([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Whoops!")), 1000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1

// if all promises fail

Promise.any([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Ouch!")), 1000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Error!")), 2000)
    ),
]).catch((error) => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ouch!
    console.log(error.errors[1]); // Error: Error!
});
