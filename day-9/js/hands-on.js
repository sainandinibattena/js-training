// Task 1

const item = "Laptop";
const price = 60000;
const tax = 0.18;

const sentence =
    `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}.`;

const multiline =
`Item: ${item}
Price: ₹${price}
GST: ₹${price * tax}
Total: ₹${price + (price * tax)}`;

const lines1 = [];

lines1.push(sentence);

lines1.push("");

lines1.push(multiline);

document.querySelector("#task1Output").textContent =
    lines1.join("\n");



// Task 2

const scores = [88, 75, 92, 60, 45];

const [topScore, secondScore, ...others] = scores;

const user = {
    name: "Anaya",
    age: 21,
    address: {
        city: "Jaipur",
        pincode: "302001"
    }
};

const {
    name: userName,
    age: userAge,
    address: { city }
} = user;

const lines2 = [];

lines2.push("top → " + topScore);

lines2.push("second → " + secondScore);

lines2.push("others → " + JSON.stringify(others));

lines2.push("");

lines2.push("name → " + userName);

lines2.push("userAge → " + userAge);

lines2.push("city → " + city);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");



// Task 3

function sumAll(...numbers) {

    return numbers.reduce((sum, n) => sum + n, 0);

}

function joinNames(separator, ...names) {

    return names.join(separator);

}

const lines3 = [];

lines3.push("sumAll(1,2,3) → " + sumAll(1, 2, 3));

lines3.push("sumAll(10,20,30,40) → " + sumAll(10, 20, 30, 40));

lines3.push("sumAll() → " + sumAll());

lines3.push("");

lines3.push(
    'joinNames(", ", "Priya", "Aarav", "Riya") → ' +
    joinNames(", ", "Priya", "Aarav", "Riya")
);

document.querySelector("#task3Output").textContent =
    lines3.join("\n");



// Bonus Task

const defaults = {
    theme: "light",
    lang: "en",
    notifications: true
};

const userPrefs = {
    theme: "dark",
    fontSize: 16
};

const finalPrefs = {
    ...defaults,
    ...userPrefs
};

function applyPrefs(defaults, prefs) {

    return {
        ...defaults,
        ...prefs
    };

}

const lines4 = [];

lines4.push("merged settings → ");

lines4.push(JSON.stringify(finalPrefs));

lines4.push("");

lines4.push("applyPrefs() → ");

lines4.push(
    JSON.stringify(
        applyPrefs(defaults, userPrefs)
    )
);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");