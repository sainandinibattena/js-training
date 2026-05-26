(function () {

    const R = RefOutput;
    const lines = [];


    R.section(lines, "Topic 1 — Lexical scope");
    R.line(lines, "outer() inner log", (function () {
        const city = "Jaipur";
        function outer() {
            const language = "Hindi";
            function inner() {
                return greeting + " " + language + " " + city;
            }
            const greeting = "Namaste";
            return inner();
        }
        return outer();
    })());

    R.section(lines, "Topic 2 — Scope chain");
    R.cases(lines, [
        { label: 'inner reads a', value: (function () {
            const a = "global a";
            function outer() {
                const b = "outer b";
                function inner() {
                    const c = "inner c";
                    return { a: a, b: b, c: c };
                }
                return inner();
            }
            const r = outer();
            return r.a;
        })() },
        { label: 'inner reads b', value: (function () {
            const a = "global a";
            function outer() {
                const b = "outer b";
                function inner() {
                    return b;
                }
                return inner();
            }
            return outer();
        })() },
        { label: 'inner reads c', value: (function () {
            function outer() {
                function inner() {
                    const c = "inner c";
                    return c;
                }
                return inner();
            }
            return outer();
        })() }
    ]);
    R.line(lines, "follow-along x + y", (function () {
        const x = 1;
        function a() {
            const y = 2;
            function b() {
                return x + y;
            }
            return b();
        }
        return a();
    })());

    R.section(lines, "Topic 3 — Closures (makeGreeter)");
    R.cases(lines, [
        { label: 'greetPriya()', value: (function () {
            function makeGreeter(name) {
                return function () {
                    return "Namaste, " + name + "!";
                };
            }
            return makeGreeter("Priya")();
        })() },
        { label: 'greetAarav()', value: (function () {
            function makeGreeter(name) {
                return function () {
                    return "Namaste, " + name + "!";
                };
            }
            return makeGreeter("Aarav")();
        })() }
    ]);

    R.section(lines, "Topic 4 — Counter");
    R.cases(lines, (function () {
        function makeCounter() {
            let count = 0;
            return function () {
                count++;
                return count;
            };
        }
        const c = makeCounter();
        return [
            { label: "c()", value: c() },
            { label: "c()", value: c() },
            { label: "c()", value: c() }
        ];
    })());

    R.section(lines, "Topic 4 — Private bank account");
    R.line(lines, "getBalance after deposit", (function () {
        function createAccount(initial) {
            let balance = initial;
            return {
                deposit: function (amt) {
                    balance += amt;
                },
                withdraw: function (amt) {
                    balance -= amt;
                },
                getBalance: function () {
                    return balance;
                }
            };
        }
        const acc = createAccount(1000);
        acc.deposit(500);
        return acc.getBalance();
    })());
    R.line(lines, "acc.balance", (function () {
        function createAccount(initial) {
            let balance = initial;
            return {
                getBalance: function () {
                    return balance;
                }
            };
        }
        return createAccount(1000).balance;
    })());

    R.section(lines, "Topic 4 — Memoize");
    R.cases(lines, (function () {
        const log = [];
        function memoize(fn) {
            const cache = {};
            return function (n) {
                if (n in cache) {
                    return cache[n];
                }
                cache[n] = fn(n);
                return cache[n];
            };
        }
        function slowSquare(n) {
            log.push("computing...");
            return n * n;
        }
        const fast = memoize(slowSquare);
        const r1 = fast(5);
        const r2 = fast(5);
        return [
            { label: "fastSquare(5) first", value: r1 },
            { label: "log after first call", value: JSON.stringify(log) },
            { label: "fastSquare(5) second", value: r2 },
            { label: "log after second call", value: JSON.stringify(log) }
        ];
    })());

    R.section(lines, "Topic 5 — var vs let in loop (when callbacks run)");
    R.line(lines, "var i (1..3) setTimeout logs", "4, 4, 4");
    R.line(lines, "let i (1..3) setTimeout logs", "1, 2, 3");
    R.note(lines, "var: one shared i. let: fresh i per iteration.");

    R.section(lines, "Topic 6 — IIFE module");
    R.line(lines, "counterModule.get() after 2 inc", (function () {
        const counterModule = (function () {
            let count = 0;
            return {
                inc: function () {
                    return ++count;
                },
                get: function () {
                    return count;
                }
            };
        })();
        counterModule.inc();
        counterModule.inc();
        return counterModule.get();
    })());

    R.show("#out", lines);

})();
