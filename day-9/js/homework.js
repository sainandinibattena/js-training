// Task 1

const person = {
    first: "Priya",
    last: "Sharma",
    city: "Jaipur"
};

const message =
    `${person.first} ${person.last} from ${person.city}`;

const lines1 = [];

lines1.push(message);

document.querySelector("#homeworkOut1").textContent =
    lines1.join("\n");



// Task 2

const numbers = [1, 2, 3, 4, 5, 6];

const [head, ...tail] = numbers;

const lines2 = [];

lines2.push("head → " + head);

lines2.push("tail → " + JSON.stringify(tail));

document.querySelector("#homeworkOut2").textContent =
    lines2.join("\n");



// Task 3

function multiply(...nums) {

    return nums.reduce((total, n) => total * n, 1);

}

const lines3 = [];

lines3.push("multiply(2,3,4) → " + multiply(2, 3, 4));

document.querySelector("#homeworkOut3").textContent =
    lines3.join("\n");



// Task 4

const user = {
    name: "Anaya",
    age: 21
};

const updatedUser = {
    ...user,
    age: 22
};

const lines4 = [];

lines4.push("original → " + JSON.stringify(user));

lines4.push("updated → " + JSON.stringify(updatedUser));

document.querySelector("#homeworkOut4").textContent =
    lines4.join("\n");