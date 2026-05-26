(function () {

    const lines = [];

    const city = "Jaipur";

    function greet(name) {
        const message = "Hi " + name + " from " + city;
        return message;
    }

    lines.push("greet(\"Priya\") → " + greet("Priya"));
    lines.push("greet(\"Aarav\") → " + greet("Aarav"));

    lines.push("");
    lines.push("—— var hoisting ——");

    var score;
    lines.push("console.log(score) → " + score);
    score = 90;
    lines.push("console.log(score) → " + score);

    lines.push("");
    lines.push("—— call stack ——");

    function multiply(a, b) {
        return a * b;
    }

    function square(n) {
        return multiply(n, n);
    }

    lines.push("printSquare(5) → " + multiply(5, 5));

    lines.push("");
    lines.push("—— hoisting lookup ——");

    var a;
    lines.push("console.log(a) → " + a);
    a = 1;
    lines.push("after a = 1 → " + a);

    lines.push("let b before line → " + (function () {
        try {
            console.log(b);
        } catch (err) {
            return err.name;
        }
        let b = 2;
        return b;
    })());

    lines.push("sayHi() before declaration → " + (function () {
        return sayHi();
        function sayHi() {
            return "Hi";
        }
    })());

    lines.push("var greetExpr() before line → " + (function () {
        try {
            greetExpr();
        } catch (err) {
            return err.name;
        }
        var greetExpr = function () {
            return "Hello";
        };
        return "ok";
    })());

    document.getElementById("out").textContent =
        lines.join("\n");

})();
