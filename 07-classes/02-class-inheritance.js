'use strict';

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
}

let animal = new Animal('My Animal');

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hides`);
    }
    stop() {
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5
rabbit.hide(); // White Rabbit stands still. White rabbit hides
