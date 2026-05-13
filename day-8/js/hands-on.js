// Task 1

const student = {
    name: "Anaya",
    age: 21,
    city: "Jaipur",
    course: "B.Tech",
    marks: [85, 90, 78]
};

const lines1 = [];

lines1.push("student → " + JSON.stringify(student));

lines1.push("name → " + student.name);
lines1.push("age → " + student.age);
lines1.push("first mark → " + student.marks[0]);

student.email = "anaya@example.com";

student.age = 22;

delete student.city;

lines1.push("");
lines1.push("updated student → " + JSON.stringify(student));

document.querySelector("#task1Output").textContent =
    lines1.join("\n");



// Task 2

const bankAccount = {

    holder: "Aarav",

    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw(amount) {

        if (amount > this.balance) {
            return "Insufficient funds";
        }

        this.balance -= amount;

        return this.balance;
    }

};

const lines2 = [];

lines2.push("deposit 1000 → " + bankAccount.deposit(1000));

lines2.push("withdraw 2000 → " + bankAccount.withdraw(2000));

lines2.push("withdraw 10000 → " + bankAccount.withdraw(10000));

document.querySelector("#task2Output").textContent =
    lines2.join("\n");



// Task 3

const product = {
    id: 101,
    name: "Laptop",
    price: 60000,
    brand: "Dell",
    stock: 5
};

const { name, price } = product;

const { brand: make } = product;

const { warranty = "1 year" } = product;

const lines3 = [];

lines3.push("name → " + name);

lines3.push("price → " + price);

lines3.push("make → " + make);

lines3.push("warranty → " + warranty);

document.querySelector("#task3Output").textContent =
    lines3.join("\n");



// Bonus Task

const lines4 = [];

lines4.push("keys → " + JSON.stringify(Object.keys(student)));

lines4.push("");

lines4.push("values → " + JSON.stringify(Object.values(student)));

lines4.push("");

Object.entries(student).forEach(function(item) {

    lines4.push(item[0] + ": " + item[1]);

});

lines4.push("");

lines4.push("total properties → " + Object.keys(student).length);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");