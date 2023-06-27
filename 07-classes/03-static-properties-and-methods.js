'use strict';

// Used to implement functions or properties that belong to the class as a whole but not to any particular object of it

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createTodays() {
        return new this("Today's digest", new Date());
    }

    static publisher = 'Ruben Lopez Gomez';
}

let articles = [
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

let article = Article.createTodays();

console.log(article.title); // Today's digest

console.log(Article.publisher); // Ruben Lopez Gomez

// Inheritance

class Animal {
    static planet = 'Earth';

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides`);
    }
}

let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Grey Rabbit', 7)];

rabbits.sort(Rabbit.compare);

rabbit[0].runs(); // Grey rabbit runs with speed 5

console.log(Rabbit.planet); // Earth
