(function () {

    const lines1 = [];

    function area(length, width) {
        return length * width;
    }

    const areaArrow = (length, width) => length * width;

    lines1.push("area(5,3) → " + area(5, 3));
    lines1.push("area(10,4) → " + area(10, 4));
    lines1.push("area(7,7) → " + area(7, 7));
    lines1.push("bonus areaArrow(8,6) → " + areaArrow(8, 6));

    document.getElementById("task1Output").textContent =
        lines1.join("\n");



    const lines2 = [];

    const greet = (name = "Guest") => "Hello, " + name + "!";

    lines2.push('greet("Priya") → ' + greet("Priya"));
    lines2.push('greet("Aarav") → ' + greet("Aarav"));
    lines2.push("greet() → " + greet());
    lines2.push("greet(null) → " + greet(null));

    document.getElementById("task2Output").textContent =
        lines2.join("\n");



    const lines3 = [];

    const cToF = (c) => (c * 9) / 5 + 32;

    lines3.push("0°C → " + cToF(0) + "°F");
    lines3.push("100°C → " + cToF(100) + "°F");
    lines3.push("37°C → " + cToF(37) + "°F");
    lines3.push("45°C → " + cToF(45) + "°F");

    document.getElementById("task3Output").textContent =
        lines3.join("\n");



    const lines4 = [];

    function double(n) {
        return n * 2;
    }

    let total = 0;

    function addToTotal(n) {
        total += n;
        return total;
    }

    lines4.push(
        "double(3) → " +
        [double(3), double(3), double(3)].join(", ")
    );

    lines4.push(
        "addToTotal(3) → " +
        [addToTotal(3), addToTotal(3), addToTotal(3)].join(", ")
    );

    document.getElementById("bonusOutput").textContent =
        lines4.join("\n");

})();