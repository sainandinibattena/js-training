// —— Task 1 — pure / impure labels

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 1 · pure vs impure — how to read labels");
    lines.push("pure   → same in → same out; no observable side effects");
    lines.push("impure → time/random/I/O/mutation of arguments/console");
    R.blank(lines);
    R.section(lines, "Answers");
    R.line(lines, "(1) (a,b)=>a+b", "pure");
    R.line(lines, "(2) ()=>Date.now()", "impure · reads clock");
    R.line(lines, "(3) (arr)=>arr.sort()", "impure · mutates argument");
    R.line(lines, "(4) (arr)=>[...arr].sort()", "pure · new array only");
    R.line(lines, "(5) x=>{ console.log(x); return x }", "impure · console side effect");

    R.show("#task1Output", lines);

})();



// —— Task 2 — pipe + addOne, square, negate

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 2 · pipe — reference code");
    lines.push("function pipe(...fns) {");
    lines.push("  return (x) => fns.reduce((acc, fn) => fn(acc), x);");
    lines.push("}");
    lines.push("const run = pipe(addOne, square, negate);");
    lines.push("// run(5): addOne→6, square→36, negate→-36");
    R.blank(lines);

    function pipe() {
        const fns = Array.prototype.slice.call(arguments);
        return function (x) {
            return fns.reduce(function (acc, fn) {
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

    const run = pipe(addOne, square, negate);

    R.section(lines, "Result");
    R.line(lines, "pipe(addOne, square, negate)(5)", run(5));
    R.line(lines, "expected (doc)", -36);

    R.show("#task2Output", lines);

})();



// —— Task 3 — curried volume

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 3 · curried volume — reference code");
    lines.push("const volume = l => w => h => l * w * h;");
    lines.push("const lengthOf5width3 = volume(5)(3);");
    lines.push("// lengthOf5width3(2) === 5 * 3 * 2");
    R.blank(lines);

    const volume = function (l) {
        return function (w) {
            return function (h) {
                return l * w * h;
            };
        };
    };

    const lengthOf5 = volume(5);
    const lengthOf5width3 = lengthOf5(3);

    R.section(lines, "Result");
    R.line(lines, "lengthOf5width3(2)", lengthOf5width3(2));
    R.line(lines, "equals 30 (doc)", lengthOf5width3(2) === 30);

    R.show("#task3Output", lines);

})();



// —— Bonus — user pipeline

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Bonus · data pipeline — reference");
    lines.push("const pipeline = pipe(");
    lines.push("  adults,        // filter age >= 18");
    lines.push("  titleNames,    // capitalize");
    lines.push("  sortAgeDesc,   // copy + sort");
    lines.push("  pluckNames     // ['Priya', 'Riya']");
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

    const users = [
        { name: "priya", age: 25 },
        { name: "aarav", age: 17 },
        { name: "riya", age: 30 }
    ];

    const adults = function (list) {
        return list.filter(function (u) {
            return u.age >= 18;
        });
    };

    const titleNames = function (list) {
        return list.map(function (u) {
            return {
                name: u.name.charAt(0).toUpperCase() + u.name.slice(1),
                age: u.age
            };
        });
    };

    const sortAgeDesc = function (list) {
        return list.slice().sort(function (a, b) {
            return b.age - a.age;
        });
    };

    const pluckNames = function (list) {
        return list.map(function (u) {
            return u.name;
        });
    };

    const pipeline = pipe(adults, titleNames, sortAgeDesc, pluckNames);

    R.section(lines, "Result");
    R.line(lines, "pipeline(users)", pipeline(users));

    R.show("#task4Output", lines);

})();
