"use strict";

// Iterating with loops

function powWithLoops(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

// Recursive

function powWithRecursion(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * powWithRecursion(x, n - 1);
    }
}

// Recursive traversals

let company = {
    sales: [
        { name: "Ruben", salary: 1000 },
        { name: "Mama", salary: 1600 },
    ],
    development: {
        sites: [
            { name: "Peter", salary: 2000 },
            { name: "Aegon", salary: 1800 },
        ],
        internals: [{ name: "Antonio", salary: 1300 }],
    },
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

console.log(sumSalaries(company));

// Linked list

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

// or

list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// Splitting into multiple parts and joining 

let secondList = list.next.next;
list.next.next = null;

list.next.next = secondList;

// Prepending values

list = {value: "new first item", next: list};

// Removing values from the middle

list.next.next = list.next.next.next;
