// —— Task 1 — reference solution ——

const cart = ["bread", "milk", "eggs"];

cart.push("butter");
cart.unshift("rice");

const lines1 = [];

lines1.push('After push("butter") + unshift("rice"):');
lines1.push(JSON.stringify(cart));

const removed = cart.pop();

lines1.push("");
lines1.push("pop() removed → " + JSON.stringify(removed));
lines1.push("cart after pop → " + JSON.stringify(cart));

cart.splice(1, 1);

lines1.push("");
lines1.push("After splice(1, 1) → " + JSON.stringify(cart));

document.querySelector("#task1Output").textContent =
    lines1.join("\n");



// —— Task 2 — reference solution ——

const scores = [88, 42, 75, 60, 91, 39, 55, 70];

const passing = scores.filter((s) => s >= 60);

const firstFail = scores.find((s) => s < 60);

const allPass = scores.every((s) => s >= 60);

const anyAbove90 = scores.some((s) => s > 90);

const lines2 = [];

lines2.push("filter (>= 60) → " + JSON.stringify(passing));
lines2.push("find (first failing) → " + firstFail);
lines2.push("every (all passing?) → " + allPass);
lines2.push("Bonus: some (> 90?) → " + anyAbove90);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");



// —— Task 3 — reference solution ——

const prices = [100, 250, 500, 1200, 80];

const withGst = prices.map((p) => {
    return (p * 1.18).toFixed(2);
});

const lines3 = [];

lines3.push("original prices → " + JSON.stringify(prices));
lines3.push("prices with GST → " + JSON.stringify(withGst));

document.querySelector("#task3Output").textContent =
    lines3.join("\n");



// —— Bonus Task — reference solution ——

const expenses = [250, 800, 120, 50, 1500, 75];

const total = expenses.reduce((sum, value) => {
    return sum + value;
}, 0);

const highest = expenses.reduce((max, value) => {

    if (value > max) {
        return value;
    }

    return max;

});

const above100 = expenses
    .filter((value) => value > 100)
    .reduce((sum, value) => {
        return sum + value;
    }, 0);

const lines4 = [];

lines4.push("total expenses → " + total);
lines4.push("highest expense → " + highest);
lines4.push("expenses above 100 total → " + above100);

document.querySelector("#task4Output").textContent =
    lines4.join("\n");