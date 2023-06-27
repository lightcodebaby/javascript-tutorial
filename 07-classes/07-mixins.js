'use strict';

// mixin

let sayHiMixin = {
    sayHi() {
        console.log(`Hello, ${this.name}`);
    },
    sayBie() {
        console.log(`Bye, ${this.name}`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin); // Copy sayHiMixin methods to User class

new User('Myself').sayHi();

// inheritance

let sayMixin = {
    say(phrase) {
        console.log(phrase);
    },
};

sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Hello, ${this.name}`);
    },
    sayBie() {
        super.say(`Bye, ${this.name}`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin); // Copy sayHiMixin methods to User class

new User('Myself').sayHi();

// EventMixin, IRL example!

let eventMixin = {
    /*
	Subscribe to event, usage:
	menu.on('select', function(item) {...})
	*/
    on(eventName, handler) {
        if (!this._eventHandlers) {
            this._eventHandlers = {};
        }
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(handler);
    },

    /*
	Cancel the subscription, usage:
	menu.off('select', handler)
	*/
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) {
            return;
        }
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    /*
	Generate an event with the given name and data, usage:
	this.trigger(eventName, ...args);
	*/
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach((handler) =>
            handler.apply(this.args)
        );
    },
};

/*
.on(event, handler) assigns function handler to run when the event with that name occurs. Technically, there's and _eventHandlers property that stores an array of handlers for each event name
.off(eventName, handler) removes the function from the handlers list
.trigger(eventName, ...args) generates the event: all handlers from _eventHandlers[eventName] are called with a list of arguments ...args
 */

// Usage

class Menu {
    choose(value) {
        this.trigger('select', value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on('select', (value) => console.log(`Value selected: ${value}`));

menu.choose('123');
