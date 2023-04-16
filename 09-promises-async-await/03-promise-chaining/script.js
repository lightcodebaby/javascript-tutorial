"use strict";

let promisesChain = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result); // 1
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // 2
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // 4
        return result * 2;
    });

let returningPromises = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result); // 1
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(function (result) {
        console.log(result); // 2
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(function (result) {
        console.log(result); // 4
    });

// practical example

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

loadScript("/examples/one.js")
    .then(function (script) {
        return loadScript("/examples/two.js");
    })
    .then(function (script) {
        return loadScript("/examples/three.js");
    })
    .then(function (script) {
        one(); // from one.js
        two(); // from two.js
        three(); // from three.js
    });

// shorter version

loadScript("/examples/one.js")
    .then((script) => loadScript("/examples/two.js"))
    .then((script) => loadScript("/examples/three.js"))
    .then((script) => {
        one();
        two();
        three();
    });

// cool example

function loadJson(url) {
    return fetch(url).then((response) => response.json());
}

function laodGithubUser(name) {
	return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
	return new Promise(function(resolve, reject) {
		let img = document.createElement("img");
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		document.body.append(img);

		setTimeout(() => {
			img.remove();
			resolve(githubUser);
		}, 3000);
	});
}

// usage

loadJson("/examples/promise-chaining/user.json")
	.then(user => laodGithubUser(user.name))
	.then(showAvatar)
	.then(githubUser => console.log(`Finished showing ${githubUser.name}`));
