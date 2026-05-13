// Task 1

const lines1 = [];

lines1.push(typeof 42);
lines1.push(typeof "hello");
lines1.push(typeof true);
lines1.push(typeof undefined);
lines1.push(typeof null);
lines1.push(typeof 100n);
lines1.push(typeof Symbol("x"));

document.querySelector("#task1Output").textContent =
    lines1.join("\n");




// Task 2

const name = "Aarav";
const age = 22;
const city = "Jaipur";

const oldWay =
    name + ", " + age + ", from " + city;

const newWay =
    `${name}, ${age}, from ${city}`;

const card =
`Name: ${name}
Age: ${age}
City: ${city}`;

const lines2 = [];

lines2.push(oldWay);
lines2.push("");
lines2.push(newWay);
lines2.push("");
lines2.push(card);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");




// Task 3

let user;

const lines3 = [];

lines3.push("user = " + user);
lines3.push("typeof user = " + typeof user);

user = null;

lines3.push("");
lines3.push("user = " + user);
lines3.push("typeof user = " + typeof user);

lines3.push("");
lines3.push("null == undefined → " + (null == undefined));
lines3.push("null === undefined → " + (null === undefined));

document.querySelector("#task3Output").textContent =
    lines3.join("\n");




// Bonus Task

const lines4 = [];

lines4.push("0.1 + 0.2 = " + (0.1 + 0.2));

lines4.push(
    "0.1 + 0.2 === 0.3 → " +
    (0.1 + 0.2 === 0.3)
);

lines4.push("");

lines4.push("1 / 0 = " + (1 / 0));

lines4.push('"abc" * 2 = ' + ("abc" * 2));

document.querySelector("#task4Output").textContent =
    lines4.join("\n");