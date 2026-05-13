// Task 1

const colorButton =
    document.querySelector("#color-btn");

colorButton.addEventListener("click", function () {

    const r =
        Math.floor(Math.random() * 256);

    const g =
        Math.floor(Math.random() * 256);

    const b =
        Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        `rgb(${r}, ${g}, ${b})`;

});



// Task 2

const checkInput =
    document.querySelector("#check-input");

checkInput.addEventListener("input", function (e) {

    if (e.target.value.length < 3) {

        e.target.style.border =
            "2px solid red";

    } else {

        e.target.style.border =
            "2px solid green";

    }

});



// Task 3

const sumForm =
    document.querySelector("#sum-form");

const num1 =
    document.querySelector("#num1");

const num2 =
    document.querySelector("#num2");

const sumResult =
    document.querySelector("#sum-result");

sumForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const total =
        Number(num1.value) +
        Number(num2.value);

    sumResult.textContent =
        "Sum = " + total;

});



// Task 4

const itemList =
    document.querySelector("#item-list");

itemList.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        console.log(e.target.textContent);

    }

});

const extraItem =
    document.createElement("li");

extraItem.textContent =
    "Pineapple";

extraItem.classList.add("list-item");

itemList.appendChild(extraItem);