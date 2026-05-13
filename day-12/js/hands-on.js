// Task 1

function safeParse(str) {

    try {

        return JSON.parse(str);

    } catch (err) {

        return `Invalid JSON: ${err.message}`;

    }

}

const validJson =
    JSON.stringify(
        safeParse('{"name":"Priya"}'),
        null,
        2
    );

const invalidJson =
    safeParse('{"name":"Priya"');

document.getElementById("task1Output").textContent =
`${validJson}

${invalidJson}`;





// Task 2

function setAge(age) {

    if (typeof age !== "number") {

        throw new Error(
            "Age must be a number"
        );

    }

    if (age < 0 || age > 120) {

        throw new Error(
            "Age must be 0-120"
        );

    }

    return age;

}

let ageOutput = "";

try {

    ageOutput +=
        `setAge(25) → ${setAge(25)}\n`;

    ageOutput +=
        `setAge("twenty") → ${setAge("twenty")}\n`;

} catch (err) {

    ageOutput +=
        `${err.message}\n`;

}

try {

    ageOutput +=
        `setAge(200) → ${setAge(200)}`;

} catch (err) {

    ageOutput +=
        err.message;

}

document.getElementById("task2Output").textContent =
    ageOutput;





// Task 3

class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name =
            "ValidationError";

    }

}

function validateEmail(email) {

    if (!email.includes("@")) {

        throw new ValidationError(
            "Invalid email"
        );

    }

    return email;

}

let emailOutput = "";

try {

    emailOutput +=
        validateEmail(
            "priya@example.com"
        ) + "\n";

    emailOutput +=
        validateEmail(
            "priya-no-at"
        );

} catch (err) {

    if (
        err instanceof ValidationError
    ) {

        emailOutput +=
            `Validation Error: ${err.message}`;

    } else {

        emailOutput +=
            err.message;

    }

}

document.getElementById("task3Output").textContent =
    emailOutput;





// Bonus Task

const bonusOutput =
`mathUtils.js

export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export default function formatPrice(n) {
    return \`₹\${n}\`;
}



app.js

import formatPrice, {
    PI,
    add,
    multiply
} from "./mathUtils.js";

console.log(PI);

console.log(add(10, 20));

console.log(multiply(5, 4));

console.log(formatPrice(500));`;

document.getElementById("task4Output").textContent =
    bonusOutput;