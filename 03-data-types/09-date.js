'use strict';

// current date

let now = new Date();

console.log(now);

// plus n milliseconds after 01/01/1970

let firstDayOf1970 = new Date(0);
let secondDayOf1970 = new Date(24 * 3600 * 1000);

console.log(firstDayOf1970);
console.log(secondDayOf1970);

let lastDayOf1969 = new Date(-24 * 3600 * 1000);

console.log(lastDayOf1969);

// new Date(year, month, date, hours, minutes, seconds, ms)

let birthDate = new Date(1994, 7, 11, 0, 0, 0, 0);

// methods

console.log(birthDate.getFullYear());
console.log(birthDate.getMonth());
console.log(birthDate.getDate());
console.log(birthDate.getHours());
console.log(birthDate.getMinutes());
console.log(birthDate.getSeconds());
console.log(birthDate.getMilliseconds());

// Sunday = 0 and Saturday = 6
console.log(birthDate.getDay());

// These methods are relative to the local time zone, for UTC+0:

console.log(birthDate.getUTCFullYear());
console.log(birthDate.getUTCMonth());
console.log(birthDate.getUTCDate());
console.log(birthDate.getUTCHours());
console.log(birthDate.getUTCMinutes());
console.log(birthDate.getUTCSeconds());
console.log(birthDate.getUTCMilliseconds());
console.log(birthDate.getUTCDay());

console.log(birthDate.getTime()); // number of milliseconds passed from 01/01/1970

console.log(birthDate.getTimezoneOffset()); // the differece between UTC and the local time zone in minutes

// setting components

birthDate.setFullYear(1994); // (year, [month], [date])
birthDate.setMonth(10); // (month, [date])
birthDate.setDate(11);
birthDate.setHours(15); // [hour, [min], [sec], [ms]]
birthDate.setMinutes(0); // (min, [sec], [ms])
birthDate.setSeconds(0); // (sec, [ms])
birthDate.setMilliseconds(0);
birthDate.setTime(0); // Milliseconds passed from 01/01/1970

birthDate.setUTCFullYear(1994); // (year, [month], [date])
birthDate.setUTCMonth(10); // (month, [date])
birthDate.setUTCDate(11);
birthDate.setUTCHours(15); // [hour, [min], [sec], [ms]]
birthDate.setUTCMinutes(0); // (min, [sec], [ms])
birthDate.setUTCSeconds(0); // (sec, [ms])
birthDate.setUTCMilliseconds(0);

// Adding time

let lastDayOfFebruary = new Date(2023, 1, 28);

console.log(lastDayOfFebruary.setDate(lastDayOfFebruary.getDate() + 1)); // First day of March

let date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log(date);

// dates to numbers and date diff

date = new Date();
console.log(+date); // same as date.getTime()

let start = Date.now(); // not a date object but the millisecondsc count from 01/01/1970

for (let i = 0; i < 10000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();

console.log(`The loop took ${end - start} ms`);

// benchmarking dates diffs (REALLY INTERESTING!!)

function diffSubstract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) {
        f(date1, date2);
    }
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// heating up!!

bench(diffSubstract);
bench(diffGetTime);

for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubstract);
    time2 += bench(diffGetTime);
}

console.log(`Total time for diffSubstract: ` + time1);
console.log(`Total time for diffGetTime: ` + time2);

// parsing dates from strings

date = new Date(Date.parse('1994-08-11T15:30:00.000+01:00'));
/*

the format is YYYY-MM-DDTHH:mm:ss.sssZ where:
- T is a delimiter 
- Z is optional and denotes the time zone in the format +- hh:mm. A single Z would mean UTC+0

*/
