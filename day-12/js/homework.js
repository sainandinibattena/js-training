// Task 1

function safeDivide(a, b) {

    if (b === 0) {

        throw new Error(
            "Cannot divide by zero"
        );

    }

    return a / b;

}

const lines1 = [];

try {

    lines1.push(
        "10 / 2 = " +
        safeDivide(10, 2)
    );

    lines1.push(
        "10 / 0 = " +
        safeDivide(10, 0)
    );

} catch (err) {

    lines1.push(err.message);

}

document.querySelector("#homeworkOut1").textContent =
    lines1.join("\n");



// Task 2

class NotFoundError extends Error {

    constructor(message) {

        super(message);

        this.name =
            "NotFoundError";

    }

}

function getUserById(id) {

    if (
        id !== 1 &&
        id !== 2 &&
        id !== 3
    ) {

        throw new NotFoundError(
            "User not found"
        );

    }

    return `User ${id}`;

}

const lines2 = [];

try {

    lines2.push(
        getUserById(2)
    );

    lines2.push(
        getUserById(10)
    );

} catch (err) {

    if (
        err instanceof NotFoundError
    ) {

        lines2.push(
            "Custom Error: " +
            err.message
        );

    } else {

        lines2.push(err.message);

    }

}

document.querySelector("#homeworkOut2").textContent =
    lines2.join("\n");



// Task 3

const lines3 = [];

lines3.push("// calc.js");

lines3.push("");

lines3.push("export function add(a, b) {");

lines3.push("    return a + b;");

lines3.push("}");

lines3.push("");

lines3.push("export function subtract(a, b) {");

lines3.push("    return a - b;");

lines3.push("}");

lines3.push("");

lines3.push("// app.js");

lines3.push("");

lines3.push('import { add, subtract } from "./calc.js";');

document.querySelector("#homeworkOut3").textContent =
    lines3.join("\n");