// Practice 1

const price = 1500;
const gstRate = 18;

const gst = price * gstRate / 100;
const total = price + gst;

const lines1 = [];

lines1.push(`Price: ₹${price}`);
lines1.push(`GST: ₹${gst}`);
lines1.push(`Total: ₹${total}`);

document.querySelector("#homework1").textContent =
    lines1.join("\n");




// Practice 2

const lines2 = [];

lines2.push(`5 == "5" → ${5 == "5"}`);
lines2.push(`5 === "5" → ${5 === "5"}`);

lines2.push("");

lines2.push(`0 == false → ${0 == false}`);
lines2.push(`0 === false → ${0 === false}`);

lines2.push("");

lines2.push(`null == undefined → ${null == undefined}`);
lines2.push(`null === undefined → ${null === undefined}`);

lines2.push("");

lines2.push(`"" == false → ${"" == false}`);
lines2.push(`"" === false → ${"" === false}`);

document.querySelector("#homework2").textContent =
    lines2.join("\n");




// Practice 3

const ages = [12, 17, 18, 25, 40];

const lines3 = [];

for (const age of ages) {

    const result =
        age >= 18 ? "adult" : "minor";

    lines3.push(
        `Age ${age} → ${result}`
    );
}

document.querySelector("#homework3").textContent =
    lines3.join("\n");




// Bonus

const isMember = true;
const amount = 1500;

const hasDiscount =
    isMember && amount > 1000;

const finalAmount =
    hasDiscount
        ? amount - (amount * 10 / 100)
        : amount;

const lines4 = [];

lines4.push(`Member: ${isMember}`);
lines4.push(`Original Amount: ₹${amount}`);
lines4.push(`Discount Applied: ${hasDiscount}`);
lines4.push(`Final Amount: ₹${finalAmount}`);

document.querySelector("#homework4").textContent =
    lines4.join("\n");