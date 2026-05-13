// Task 1

const names = ["Priya", "Aarav", "Riya"];

const greetings = names.map((name) => "Hello, " + name);

const lines1 = [];

lines1.push(JSON.stringify(greetings));

document.querySelector("#homeworkOut1").textContent =
    lines1.join("\n");



// Task 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((n) => n % 2 === 0);

const total = evenNumbers.reduce((sum, n) => sum + n, 0);

const lines2 = [];

lines2.push("Even numbers → " + JSON.stringify(evenNumbers));
lines2.push("Sum → " + total);

document.querySelector("#homeworkOut2").textContent =
    lines2.join("\n");



// Task 3

const arr = [3, 1, 4, 1, 5, 9, 2, 6];

const max1 = Math.max(...arr);

const max2 = arr.reduce((max, n) => {

    if (n > max) {
        return n;
    }

    return max;

});

const lines3 = [];

lines3.push("Math.max → " + max1);
lines3.push("reduce → " + max2);

document.querySelector("#homeworkOut3").textContent =
    lines3.join("\n");



// Task 4

function average(array) {

    const sum = array.reduce((total, n) => total + n, 0);

    return sum / array.length;

}

const marks = [80, 90, 70, 100];

const lines4 = [];

lines4.push("Average → " + average(marks));

document.querySelector("#homeworkOut4").textContent =
    lines4.join("\n");