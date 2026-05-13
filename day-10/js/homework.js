// Task 1

const text = document.querySelector("#text");

text.textContent = "Hello";

text.innerHTML = "<strong>Hello World</strong>";

text.textContent = "Back to plain text";



// Task 2

const items = document.querySelectorAll("#items li");

items.forEach(function(item, index) {

    if (index % 2 === 0) {
        item.classList.add("even");
    }

});



// Task 3

const button = document.createElement("button");

button.textContent = "Click me";

button.id = "click-btn";

button.classList.add("btn");

document.body.appendChild(button);



// Task 4

const productList = [
    {
        name: "Laptop",
        price: 60000
    },
    {
        name: "Phone",
        price: 25000
    },
    {
        name: "Tablet",
        price: 18000
    }
];

const productsDiv = document.querySelector("#products");

productList.forEach(function(product) {

    const card = document.createElement("div");

    card.classList.add("card");

    const title = document.createElement("h3");

    title.textContent = product.name;

    const price = document.createElement("p");

    price.textContent = "₹" + product.price;

    card.appendChild(title);

    card.appendChild(price);

    productsDiv.appendChild(card);

});