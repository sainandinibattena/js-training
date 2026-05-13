// Task 1

const counterButton =
    document.querySelector("#counter-btn");

const countText =
    document.querySelector("#count");

let clickCount = 0;

counterButton.addEventListener("click", function () {

    clickCount++;

    countText.textContent = clickCount;

    if (clickCount >= 10) {

        counterButton.textContent =
            "Stop clicking!";

    }

});



// Task 2

const liveInput =
    document.querySelector("#live-input");

const preview =
    document.querySelector("#preview");

liveInput.addEventListener("input", function (e) {

    if (e.target.value === "") {

        preview.textContent =
            "Start typing...";

    } else {

        preview.textContent =
            e.target.value;

    }

});



// Task 3

const form =
    document.querySelector("#reg-form");

const nameField =
    document.querySelector("#name-field");

const welcome =
    document.querySelector("#welcome");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nameValue =
        nameField.value;

    if (nameValue === "") {

        welcome.textContent =
            "Please enter your name";

    } else {

        welcome.textContent =
            `Welcome, ${nameValue}!`;

    }

});



// Bonus Task

const todoList =
    document.querySelector("#todo-list");

todoList.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("done");

    }

});

const newItem =
    document.createElement("li");

newItem.textContent =
    "Study JavaScript";

todoList.appendChild(newItem);