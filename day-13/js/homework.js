// Task 1

const lines1 = [];

var age;
lines1.push("typeof age (before assignment) → " + typeof age);
age = 25;
lines1.push("age after assignment → " + age);

document.querySelector("#homeworkOut1").textContent =
    lines1.join("\n");



// Task 2

const lines2 = [];

try {
    console.log(student);
} catch (err) {
    lines2.push(err.name + ": " + err.message);
}

let student = "Riya";
lines2.push("After declaration: " + student);

document.querySelector("#homeworkOut2").textContent =
    lines2.join("\n");



// Task 3

const lines3 = [];

try {
    declFn();
    lines3.push("function declaration before line → works");
} catch (err) {
    lines3.push("function declaration → " + err.name);
}

function declFn() {
    return "decl";
}

try {
    varExprFn();
} catch (err) {
    lines3.push("var expression before line → " + err.name);
}

var varExprFn = function () {
    return "var";
};

try {
    constArrowFn();
} catch (err) {
    lines3.push("const arrow before line → " + err.name);
}

const constArrowFn = () => "arrow";

document.querySelector("#homeworkOut3").textContent =
    lines3.join("\n");



// Task 4

const lines4 = [];

function helper(x) {
    return x * 2;
}

function runTraceDemo() {
    return helper(3);
}

runTraceDemo();
lines4.push("runTraceDemo() → " + runTraceDemo());
lines4.push("Add console.trace() inside helper in DevTools to see each execution context frame.");

document.querySelector("#homeworkOut4").textContent =
    lines4.join("\n");



// Task 5

const lines5 = [];

lines5.push("Reading task — open these in your browser:");
lines5.push("https://javascript.info/var");
lines5.push("https://javascript.info/closure (Lexical Environment section)");

document.querySelector("#homeworkOut5").textContent =
    lines5.join("\n");



// Task 6

const lines6 = [];

lines6.push("Bonus — watch: Namaste JS Episode 2 — Hoisting in JavaScript (~12 min)");

document.querySelector("#homeworkOut6").textContent =
    lines6.join("\n");
