// —— Task 1 — reference solution ——

const lines1 = [];

var name;
lines1.push("console.log(name) → " + name);
name = "Priya";
lines1.push("console.log(name) → " + name);
lines1.push("");
lines1.push("First log is undefined (not ReferenceError) because var is hoisted with value undefined.");

document.querySelector("#task1Output").textContent =
    lines1.join("\n");



// —— Task 2 — reference solution ——

const lines2 = [];

try {
    console.log(city);
} catch (err) {
    lines2.push("console.log(city) before let → " + err.name + ": " + err.message);
}

let city = "Jaipur";
lines2.push("After moving let above log → city = " + city);
lines2.push("");
lines2.push("TDZ = Temporal Dead Zone");

document.querySelector("#task2Output").textContent =
    lines2.join("\n");



// —— Task 3 — reference solution ——

const lines3 = [];

function sayHi() {
    console.log("Hi");
}

sayHi();
lines3.push("sayHi() → works (function declaration fully hoisted)");

try {
    greet();
} catch (err) {
    lines3.push("greet() → " + err.name + ": " + err.message);
}

var greet = function () {
    console.log("Hello");
};

lines3.push("");
lines3.push("Declaration: full body hoisted. var expression: hoisted as undefined → TypeError when called.");

document.querySelector("#task3Output").textContent =
    lines3.join("\n");



// —— Bonus Task — reference solution ——

const lines4 = [];

function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    console.log(square(n));
}

lines4.push("Call stack when multiply(5, 5) runs:");
lines4.push("  ┌────────────────────────────┐");
lines4.push("  │  multiply(5, 5)            │  ← top");
lines4.push("  ├────────────────────────────┤");
lines4.push("  │  square(5)                 │");
lines4.push("  ├────────────────────────────┤");
lines4.push("  │  printSquare(5)            │");
lines4.push("  ├────────────────────────────┤");
lines4.push("  │  Global Execution Context  │");
lines4.push("  └────────────────────────────┘");
lines4.push("");
lines4.push("printSquare(5) console output → 25");

printSquare(5);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");
