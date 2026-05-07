const title = document.querySelector("#title");

title.textContent = "Hello, Nandini";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";

const themeBtn = document.getElementById("theme-btn")

document.body.classList.toggle("dark");

const names = ["Priya", "Aarav", "Riya", "Kabir"];

const nameList = document.getElementById("names-list");

names.forEach((name,index) => {
    const li = document.createElement("li")

    li.textContent = `${index+1}. ${name}`;

    li.classList.add("name-item")

    nameList.appendChild(li);
})


const product = { name: "Laptop", price: 60000, brand: "Dell" };

const container = document.getElementById("cards")

const card = document.createElement("div") 
card.classList.add("card")

const title1 = document.createElement("h3")
title1.textContent = product.name

const brand = document.createElement("p")
brand.textContent = product.brand

const price = document.createElement("span")
price.textContent = product.price

card.append(title1)
card.append(brand)
card.append(price)

container.appendChild(card)

container.style.backgroundColor = "red";