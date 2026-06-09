// —— Practice task 1 — compose vs pipe

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW1 · pipe vs compose — reference");
    lines.push("pipe(f,g,h)(x)     → h(g(f(x)))     // left-to-right");
    lines.push("compose(f,g,h)(x) → f(g(h(x)))   // right-to-left");
    R.blank(lines);

    function pipe() {
        const fns = Array.prototype.slice.call(arguments);
        return function (x) {
            return fns.reduce(function (acc, fn) {
                return fn(acc);
            }, x);
        };
    }

    function compose() {
        const fns = Array.prototype.slice.call(arguments);
        return function (x) {
            return fns.reduceRight(function (acc, fn) {
                return fn(acc);
            }, x);
        };
    }

    const addOne = function (x) {
        return x + 1;
    };

    const square = function (x) {
        return x * x;
    };

    const negate = function (x) {
        return -x;
    };

    R.section(lines, "Results (same fns, different order)");
    R.line(lines, "pipe(addOne, square, negate)(5)", pipe(addOne, square, negate)(5));
    R.line(lines, "compose(addOne, square, negate)(5)", compose(addOne, square, negate)(5));
    R.note(lines, "compose applies last-listed fn to x first.");

    R.show("#homeworkOut1", lines);

})();



// —— Practice task 2 — mutate vs pure

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW2 · sort in place vs copy — reference");
    lines.push("// bad: arr.sort() mutates arr");
    lines.push("// good: return arr.slice().sort(...)");
    R.blank(lines);

    const original = [3, 1, 2];

    const copyForBad = original.slice();
    function sortInPlace(arr) {
        arr.sort(function (a, b) {
            return a - b;
        });
        return arr;
    }

    const afterBad = sortInPlace(copyForBad);

    const copyForGood = original.slice();
    function sortPure(arr) {
        return arr.slice().sort(function (a, b) {
            return a - b;
        });
    }

    const afterGood = sortPure(copyForGood);

    R.section(lines, "Results");
    R.line(lines, "mutating · returned array (sorted)", afterBad.join(","));
    R.line(lines, "mutating · input array mutated?", copyForBad.join(",") === "1,2,3");
    R.line(lines, "pure · returned sorted", afterGood.join(","));
    R.line(lines, "pure · input unchanged", copyForGood.join(",") === "3,1,2");

    R.show("#homeworkOut2", lines);

})();



// —— Practice task 3 — curry(fn)

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW3 · generic curry — reference");
    lines.push("function curry(fn) {");
    lines.push("  return function curried(...args) {");
    lines.push("    if (args.length >= fn.length) return fn(...args);");
    lines.push("    return (...more) => curried(...args, ...more);");
    lines.push("  };");
    lines.push("}");
    R.blank(lines);

    function curry(fn) {
        return function curried() {
            const args = Array.prototype.slice.call(arguments);
            if (args.length >= fn.length) {
                return fn.apply(null, args);
            }
            return function () {
                const next = Array.prototype.slice.call(arguments);
                return curried.apply(null, args.concat(next));
            };
        };
    }

    function add(a, b, c) {
        return a + b + c;
    }

    const curriedAdd = curry(add);

    R.section(lines, "Result");
    R.line(lines, "curry(add)(1)(2)(3)", curriedAdd(1)(2)(3));

    R.show("#homeworkOut3", lines);

})();



// —— Practice task 4 — average line total (no GST)

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW4 · average line total — reference");
    lines.push("const avgPipeline = pipe(");
    lines.push("  lineTotals,   // orders → [100,200,...]");
    lines.push("  sum,          // → single sum");
    lines.push("  (s) => s / orders.length");
    lines.push(");");
    R.blank(lines);

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

    const lineTotals = function (list) {
        return list.map(function (o) {
            return o.price * o.quantity;
        });
    };

    const sum = function (nums) {
        return nums.reduce(function (a, b) {
            return a + b;
        }, 0);
    };

    const average = function (total, _orders) {
        return total / _orders.length;
    };

    const avgPipeline = pipe(
        function (os) {
            return lineTotals(os);
        },
        function (totals) {
            return sum(totals);
        },
        function (s) {
            return average(s, orders);
        }
    );

    R.section(lines, "Results");
    R.line(lines, "sum of line totals (check)", 1550);
    R.line(lines, "average (÷4 orders)", avgPipeline(orders));

    R.show("#homeworkOut4", lines);

})();
