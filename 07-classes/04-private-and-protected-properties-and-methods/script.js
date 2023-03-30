"use strict";

// Protecting wateramount

class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10;

console.log(coffeeMachine.waterAmount); // 0

// Read-only power

class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}

let coffeeMachine = new CoffeeMachine(100);

console.log(`Power is ${coffeeMachine.power}W`); // Power is 100W

coffeeMachine.power = 25; // Error

// Private #waterLimit

class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
