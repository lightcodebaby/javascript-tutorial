'use strict';

let student = {
    name: 'Ruben',
    age: 28,
    isAdmin: true,
    courses: ['JavaScript', 'Python', 'Terraform', 'AWS', 'TypeScript'],
    spuse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // string!
console.log(json);

// methods, symbols and undefined properties are IGNORED

let user = {
    sayHi() {
        console.log('Hello');
    },
    [Symbol('id')]: 123,
    something: undefined,
};

console.log(JSON.stringify(user)); // {}

// Avoid circular references

let room = {
    number: 23,
};

let meetup = {
    title: 'Conference',
    participants: ['Ruben', 'Peter', 'Aegon'],
    place: room, // Circular reference
};

room.occupiedBy = meetup; // Circular reference

console.log(
    JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])
); // Too many properties!

console.log(
    JSON.stringify(meetup, function replacer(key, value) {
        console.log(`${key}: ${value}`);
        return key == 'occupiedBy' ? undefined : value; // All the properties except occupiedBy
    })
);

// Prettify format

console.log(JSON.stringify(student), null, 2);

// From JSON to object

let userData =
    '{ "name": "Ruben", "age": 28, "isAdmin" true, "pets": ["Peter", "Aegon"] }';

user = JSON.parse(userData);

console.log(user.pets[0]); // Peter

// Using revivers

let schedule = `{
	"meetups": [
		{"title": "Conference", "date": "2017-11-30T12:00:00.000" },
		{"title": "Birthday", "date": "2017-04-18T12:00:00.000Z"}
	]
}`;

schedule = JSON.parse(schedule, function (key, value) {
    return key == 'date' ? new Date(value) : value;
});

console.log(schedule.meetups[1].date.getDate()); // it works!4
