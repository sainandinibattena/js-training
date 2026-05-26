// Task 1

(function () {

    const R = RefOutput;
    const lines = [];


    const user = {
        name: "Priya",
        greet: function () {
            return this.name;
        }
    };

    R.line(lines, "user.greet()", user.greet());

    const fn = user.greet;
    try {
        R.line(lines, "fn()", fn());
    } catch (err) {
        R.error(lines, "fn()", err);
    }

    R.line(lines, 'user.greet.call({ name: "X" })', user.greet.call({ name: "X" }));

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];


    class Worker {
        constructor() {
            this.done = 0;
        }
        mark() {
            this.done++;
            return this.done;
        }
    }

    const w = new Worker();
    const lost = w.mark;

    R.line(lines, "lost callback w.mark()", (function () {
        try {
            return lost();
        } catch (err) {
            return err.name;
        }
    })());

    R.line(lines, "Fix bind — 3 calls", [w.mark.bind(w)(), w.mark.bind(w)(), w.mark.bind(w)()].join(", "));
    R.line(lines, "Fix arrow wrapper", [function () { return w.mark(); }(), function () { return w.mark(); }(), function () { return w.mark(); }()].join(", "));

    class WorkerArrow {
        done = 0;
        mark = () => {
            this.done++;
            return this.done;
        };
    }

    const wa = new WorkerArrow();
    R.line(lines, "Fix class field arrow", [wa.mark(), wa.mark(), wa.mark()].join(", "));

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];


    function sum() {
        const nums = Array.prototype.slice.call(arguments);
        return nums.reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    const total = sum.apply(null, [1, 2, 3, 4, 5]);

    R.line(lines, "sum.apply(null, [1,2,3,4,5])", total);
    R.note(lines, "apply spreads an array into separate arguments — perfect for variadic functions.");

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];


    function describeThis(ctx) {
        if (ctx === undefined) {
            return "undefined";
        }
        if (ctx === null) {
            return "null";
        }
        if (typeof globalThis !== "undefined" && ctx === globalThis) {
            return "[global object]";
        }
        if (typeof window !== "undefined" && ctx === window) {
            return "Window";
        }
        try {
            return JSON.stringify(ctx);
        } catch (err) {
            return String(ctx);
        }
    }

    const f = () => {
        return describeThis(this);
    };

    const bound = f.bind({ x: 1 });

    R.line(lines, "f() — console.log(this) equivalent", f());
    R.line(lines, "bound() after .bind({ x: 1 })", bound());
    R.note(lines, "Arrow ignores .bind — both calls show the same lexical this (undefined in module, Window in a plain script file).");

    R.show("#homeworkOut4", lines);

})();
