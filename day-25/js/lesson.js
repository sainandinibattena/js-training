(function () {

    const R = RefOutput;
    const lines = [];

    function pipe() {
        const fns = Array.prototype.slice.call(arguments);
        return function (x) {
            return fns.reduce(function (acc, fn) {
                return fn(acc);
            }, x);
        };
    }

    const orders = [
        { id: 1, item: "Pen", price: 50, quantity: 2 },
        { id: 2, item: "Book", price: 200, quantity: 1 },
        { id: 3, item: "Bag", price: 800, quantity: 1 },
        { id: 4, item: "Mug", price: 150, quantity: 3 }
    ];

    const lineTotal = function (o) {
        return o.price * o.quantity;
    };

    const withGST = function (amt) {
        return amt * 1.18;
    };

    const round2 = function (n) {
        return Math.round(n * 100) / 100;
    };

    const formatINR = function (n) {
        return "₹" + Number(n).toLocaleString("en-IN");
    };

    const sum = function (a, b) {
        return a + b;
    };

    const grandTotal = pipe(
        function (os) {
            return os.map(lineTotal);
        },
        function (totals) {
            return totals.reduce(sum, 0);
        },
        withGST,
        round2,
        formatINR
    );

    R.section(lines, "Topic 1 · pure functions");
    lines.push("// same inputs → same output; no hidden I/O");
    R.line(lines, "add(a,b) pure example", 7);
    R.line(lines, "withGST(price) pure example", 118);
    R.blank(lines);

    R.section(lines, "Topic 3 · map / filter / reduce");
    lines.push("arr.map(fn).filter(pred).reduce(combine, init);");
    R.line(lines, "map | filter | reduce (lesson examples)", "[2,4,6,8,10] | [2,4] | 15");
    R.line(lines, "multiplier(2)(5) style", 10);
    R.blank(lines);

    R.section(lines, "Topic 4 · pipe (left-to-right)");
    lines.push("function pipe(...fns) {");
    lines.push("  return (x) => fns.reduce((acc, fn) => fn(acc), x);");
    lines.push("}");
    R.line(lines, "follow-along m(inc)(5)", 12);
    R.line(lines, "pipe word count", 4);
    R.blank(lines);

    R.section(lines, "Topic 5 · curry");
    lines.push("const addC = a => b => c => a + b + c;");
    lines.push("const tax = rate => price => price * (1 + rate/100);");
    R.line(lines, "addC(1)(2)(3)", 6);
    R.line(lines, "tax(18)(1000)", 1180);
    R.blank(lines);

    R.section(lines, "Topic 6 · partial application");
    lines.push("fn.bind(null, arg1, arg2);");
    lines.push("// or wrap: (rest) => fn(fixed, rest);");
    R.line(lines, "bind greet", "Good morning, Priya!");
    R.line(lines, "partial greet", "Hello evening, Riya!");
    R.blank(lines);

    R.section(lines, "Topic 7 · orders pipeline (computed)");
    lines.push("grandTotal = pipe(");
    lines.push("  (os) => os.map(lineTotal),");
    lines.push("  (totals) => totals.reduce(sum, 0),");
    lines.push("  withGST, round2, formatINR");
    lines.push(");");
    R.line(lines, "grandTotal(orders)", grandTotal(orders));

    R.show("#out", lines);

})();
