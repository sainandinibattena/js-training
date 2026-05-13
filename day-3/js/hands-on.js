// Task 1

const price = 850;
const gst = price * 18 / 100;
const total = price + gst;

const lines1 = [];

lines1.push(`Price: ₹${price}`);
lines1.push(`GST: ₹${gst}`);
lines1.push(`Total: ₹${total}`);

lines1.push("");

const price2 = 1234.50;
const gst2 = price2 * 18 / 100;
const total2 = price2 + gst2;

lines1.push(`Price: ₹${price2}`);
lines1.push(`GST: ₹${gst2}`);
lines1.push(`Total: ₹${total2}`);

document.querySelector("#task1Output").textContent =
    lines1.join("\n");




// Task 2

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

lines2.push("");

lines2.push(`"abc" == "abc" → ${"abc" == "abc"}`);
lines2.push(`"abc" === "abc" → ${"abc" === "abc"}`);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");




// Task 3

const age = 22;
const hasEmail = true;

const canRegister = age >= 18 && hasEmail;

const userName = "";
const displayName = userName || "Guest";

const isLoggedIn = false;
const isLoggedOut = !isLoggedIn;

const lines3 = [];

lines3.push(`canRegister → ${canRegister}`);
lines3.push(`displayName → ${displayName}`);
lines3.push(`isLoggedOut → ${isLoggedOut}`);

document.querySelector("#task3Output").textContent =
    lines3.join("\n");




// Bonus

const seniorAge = 70;
const fee =
    seniorAge >= 65 ? 0 : 100;

const score = 82;

const result =
    score >= 80
        ? "high"
        : score >= 50
            ? "medium"
            : "low";

const lines4 = [];

lines4.push(`Fee: ₹${fee}`);

lines4.push(
    `Discount: ${seniorAge >= 65 ? "Yes" : "No"}`
);

lines4.push(`Score Level: ${result}`);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");