// Task 1

const titleElement = document.querySelector("#title");

titleElement.textContent = "Hello, Sai!";

titleElement.style.color = "crimson";

titleElement.style.fontFamily = "Georgia, serif";



// Task 2

const themeButton = document.querySelector("#theme-btn");

document.body.classList.toggle("dark");

document.body.classList.toggle("dark");

console.log(
    document.body.classList.contains("dark")
);



// Task 3

const names = ["Priya", "Aarav", "Riya", "Kabir"];

const namesList = document.querySelector("#names-list");

names.forEach(function(name, index) {

    const li = document.createElement("li");

    li.textContent = `${index + 1}. ${name}`;

    li.classList.add("name-item");

    namesList.appendChild(li);

});



// Bonus Task

const product = {
    name: "Laptop",
    price: 60000,
    brand: "Dell"
};

const cards = document.querySelector("#cards");

const card = document.createElement("div");

card.classList.add("card");

const heading = document.createElement("h3");

heading.textContent = product.name;

const brandText = document.createElement("p");

brandText.textContent = product.brand;

const priceText = document.createElement("span");

priceText.textContent = "₹" + product.price;

card.appendChild(heading);

card.appendChild(brandText);

card.appendChild(priceText);

cards.appendChild(card);