// —— Task 1 — reference solution ——

const myName = "Priya";

const lines1 = [];

lines1.push("Hello, World!");
lines1.push(myName);
lines1.push(myName + " is learning JS");

document.querySelector("#task1Output").textContent =
    lines1.join("\n");



// —— Task 2 — reference solution ——

let age = 25;

const lines2 = [];

lines2.push("age = " + age);

age = 26;

lines2.push("updated age = " + age);

const PI = 3.14;

lines2.push("PI = " + PI);

let cityName;

lines2.push("cityName before value = " + cityName);

cityName = "Jaipur";

lines2.push("cityName after value = " + cityName);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");



// —— Task 3 — reference solution ——

const lines3 = [];

{
    let x = 10;

    lines3.push("Inside block x = " + x);
}

lines3.push("x outside block gives error");

if (true) {

    let inside = "hi";

    lines3.push("inside = " + inside);
}

lines3.push("inside outside if gives error");

document.querySelector("#task3Output").textContent =
    lines3.join("\n");



// —— Bonus Task — reference solution ——

const lines4 = [];

for (var i = 0; i < 3; i++) {

}

lines4.push("var i after loop = " + i);

lines4.push("var leaks outside loop");

lines4.push("let does not leak outside");

document.querySelector("#task4Output").textContent =
    lines4.join("\n");