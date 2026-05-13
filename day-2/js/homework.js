// Practice 1

const lines1 = [];

const numberValue = 42;
const stringValue = "hello";
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const bigintValue = 100n;
const symbolValue = Symbol("id");

lines1.push(numberValue + " → " + typeof numberValue);
lines1.push(stringValue + " → " + typeof stringValue);
lines1.push(booleanValue + " → " + typeof booleanValue);
lines1.push(nullValue + " → " + typeof nullValue);
lines1.push(undefinedValue + " → " + typeof undefinedValue);
lines1.push(bigintValue + " → " + typeof bigintValue);
lines1.push(typeof symbolValue);

document.querySelector("#homework1").textContent =
    lines1.join("\n");




// Practice 2

const userName = "Priya";
const userAge = 21;
const userCity = "Jaipur";

const lines2 = [];

lines2.push(`${userName} is ${userAge} years old.`);
lines2.push(`${userName} lives in ${userCity}.`);
lines2.push(`${userName} is learning JavaScript.`);
lines2.push(`${userName} likes coding.`);
lines2.push(`${userName} wants to become a developer.`);

document.querySelector("#homework2").textContent =
    lines2.join("\n");




// Practice 3

const lines3 = [];

lines3.push("0.1 + 0.2 = " + (0.1 + 0.2));

lines3.push(
    "(10 + 20) / 100 = " +
    ((10 + 20) / 100)
);

document.querySelector("#homework3").textContent =
    lines3.join("\n");




// Bonus

const card =
`Name: Priya
Age: 21
City: Jaipur
Fact: Learning JavaScript`;

document.querySelector("#homework4").textContent =
    card;