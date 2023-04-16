"use strict";

// catching errors with setTimeout

setTimeout(function () {
    try {
        noSuchVariable;
    } catch {
        console.log("error is caught!");
    }
}, 1000);

// error properties

try {
    lalala;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

    console.log(err);
}

// examples

let json = "{ bad json }";

try {
    let user = JSON.parse(json);
    console.log(user.name);
} catch (err) {
    console.log("Error!");
    console.log(err.name);
    console.log(err.message);
}

// throwing our own errors

json = '{ "age" : 30 }';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    console.log(user.name);
} catch (err) {
    console.log("JSON err: " + err.message);
}

// rethrowing errors

function readData() {
    let json = '{ "age": 30}';

    try {
        blablabla();
    } catch (err) {
        if (!(err instanceof SyntaxError)) {
            throw err; // Rethrow!
        }
    }
}

try {
    readData();
} catch (err) {
    console.log("Caught it!");
}

// finally block

let num = +prompt("Enter a positive integer number?", 35);

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must not be negative, and also an integer");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

console.log(result || "error occured");

console.log(`execution took ${diff}ms`);

// custom errors

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function test() {
    throw new ValidationError("My own error");
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No field: age");
    }

    if (!user.name) {
        throw new ValidationError("No field: name");
    }

    return user;
}

try {
    readUser('{ "age": 28}');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message);
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}

// using a basic error

class BasicError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
    }
}

class ValidationError extends BasicError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.property = property;
    }
}

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }
}

try {
    readUser("{bad json}");
} catch (err) {
    if (err instanceof ReadError) {
        console.log(e);
        console.log("Original error: " + err.cause);
    } else {
        throw err;
    }
}
