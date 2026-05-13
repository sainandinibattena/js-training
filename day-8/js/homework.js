// Task 1

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    pages: 320
};

const key = "title";

const lines1 = [];

lines1.push("title → " + book[key]);

document.querySelector("#homeworkOut1").textContent =
    lines1.join("\n");



// Task 2

book.summary = function () {

    return `${this.title} by ${this.author} (${this.year})`;

};

const lines2 = [];

lines2.push(book.summary());

document.querySelector("#homeworkOut2").textContent =
    lines2.join("\n");



// Task 3

const lines3 = [];

Object.entries(book).forEach(function(item) {

    lines3.push(item[0] + ": " + item[1]);

});

document.querySelector("#homeworkOut3").textContent =
    lines3.join("\n");



// Task 4

const original = {
    name: "Anaya",
    age: 22
};

const copy = {
    ...original
};

copy.age = 25;

const lines4 = [];

lines4.push("original → " + JSON.stringify(original));

lines4.push("copy → " + JSON.stringify(copy));

document.querySelector("#homeworkOut4").textContent =
    lines4.join("\n");