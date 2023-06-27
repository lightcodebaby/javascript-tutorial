'use strict';

// Extending Array

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr); // 10, 50

// Specifying which constructor will built-in methods use

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    static get [Symbol.species]() {
        return Array;
    }
}

arr = new PowerArray(1, 2, 5, 10, 50);

filteredArr = arr.filter((item) => item >= 10);

console.log(filteredArr.isEmpty()); // Error!! filteredArray used the Array constructor to built a new one with the filtered results and now it doesn't have isEmpty method!
