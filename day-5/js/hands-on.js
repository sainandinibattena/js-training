// Task 1

const lines1 = [];

for (let i = 1; i <= 10; i++) {

    const result = 7 * i;

    lines1.push(`7 x ${i} = ${result}`);
}

lines1.push("");
lines1.push("Even multiples:");

for (let i = 1; i <= 10; i++) {

    const result = 7 * i;

    if (result % 2 !== 0) {
        continue;
    }

    lines1.push(result);
}

document.querySelector("#task1Output").textContent =
    lines1.join("\n");




// Task 2

let sum = 0;
let i = 1;

while (i <= 100) {

    sum = sum + i;

    i++;
}

let oddSum = 0;
let j = 1;

while (j <= 100) {

    if (j % 2 !== 0) {
        oddSum = oddSum + j;
    }

    j++;
}

const lines2 = [];

lines2.push(`Sum from 1 to 100 = ${sum}`);
lines2.push(`Odd sum from 1 to 100 = ${oddSum}`);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");




// Task 3

const names = [
    "Priya",
    "Aarav",
    "Riya",
    "Kabir",
    "Anaya"
];

const lines3 = [];

lines3.push("Names:");

for (const name of names) {

    lines3.push(name);
}

let count = 0;

for (const name of names) {

    if (name.length > 4) {
        count++;
    }
}

lines3.push("");
lines3.push(`Names longer than 4 letters = ${count}`);

lines3.push("");
lines3.push("Characters in Jaipur:");

for (const letter of "Jaipur") {

    lines3.push(letter);
}

document.querySelector("#task3Output").textContent =
    lines3.join("\n");




// Bonus

const student = {
    name: "Anaya",
    age: 21,
    city: "Jaipur",
    course: "B.Tech"
};

const lines4 = [];

let total = 0;

for (const key in student) {

    lines4.push(`${key}: ${student[key]}`);

    total++;
}

lines4.push("");
lines4.push(`Total properties = ${total}`);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");