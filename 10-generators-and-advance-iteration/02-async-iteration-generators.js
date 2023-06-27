'use strict';

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (let value of range) {
    console.log(value);
}

// async iterables

range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

(async () => {
    for await (let value of range) {
        console.log(value);
    }
})();

// with generators

range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    },
};

for (let value of range) {
    console.log(value);
}

// async generators with real life example

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Our script' },
        });

        const body = await response.json();

        let nextPage = response.headers
            .get('Link')
            .match(/<(.*?)>; rel="next"/);

        url = nextPage;

        for (let commit of body) {
            yield commit;
        }
    }
}

// usage

(async () => {
    let count = 0;

    for await (const commit of fetchCommits(
        'javascript-tutorial/en.javascript.info'
    )) {
        console.log(commit.author.login);

        if (++count == 100) {
            // let's stop at 100 commits
            break;
        }
    }
})();
