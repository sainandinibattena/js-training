(function () {

    const lines = [];

    const fruits = ["apple", "banana", "mango"];

    lines.push("fruits[0] = " + fruits[0]);
    lines.push("fruits[2] = " + fruits[2]);
    lines.push("fruits.length = " + fruits.length);

    const numbers = [1, 2, 3, 4];

    const doubled = numbers.map(n => n * 2);

    lines.push("map doubled = " + doubled.join(", "));

    const evenNumbers = numbers.filter(n => n % 2 === 0);

    lines.push("filter even = " + evenNumbers.join(", "));

    const total = numbers.reduce((sum, n) => sum + n, 0);

    lines.push("reduce total = " + total);

    document.getElementById("out").textContent =
        lines.join("\n");

})();