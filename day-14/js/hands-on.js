// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function makeCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }

    const counterA = makeCounter();
    const counterB = makeCounter();

    R.line(lines, "counterA()", counterA());
    R.line(lines, "counterA()", counterA());
    R.line(lines, "counterB()", counterB());
    R.line(lines, "counterA()", counterA());
    R.note(lines, "count lives in each closure — private to that makeCounter() call.");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function varLoopLogs() {
        const logs = [];
        for (var i = 1; i <= 3; i++) {
            logs.push(function () {
                return i;
            });
        }
        return logs.map(function (fn) {
            return fn();
        }).join(", ");
    }

    function letLoopLogs() {
        const logs = [];
        for (let i = 1; i <= 3; i++) {
            logs.push(function () {
                return i;
            });
        }
        return logs.map(function (fn) {
            return fn();
        }).join(", ");
    }

    R.line(lines, "for (var i) setTimeout → console.log(i)", varLoopLogs());
    R.line(lines, "for (let i) setTimeout → console.log(i)", letLoopLogs());
    R.note(lines, "var: one i shared (4 after loop). let: new i each iteration (1, 2, 3).");

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function createAccount(initial) {
        let balance = initial;
        return {
            deposit: function (amount) {
                balance += amount;
            },
            withdraw: function (amount) {
                balance -= amount;
            },
            getBalance: function () {
                return balance;
            }
        };
    }

    const account = createAccount(1000);
    account.deposit(500);
    account.withdraw(200);

    R.line(lines, "getBalance()", account.getBalance());
    R.line(lines, "account.balance", account.balance);
    R.note(lines, "balance is private inside the closure — only methods can access it.");

    R.show("#task3Output", lines);

})();



// —— Bonus Task — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const computeLog = [];

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

    function expensiveSquare(n) {
        computeLog.push("computing...");
        return n * n;
    }

    const fastSquare = memoize(expensiveSquare);

    R.line(lines, "fastSquare(5)", fastSquare(5));
    R.line(lines, "log", JSON.stringify(computeLog));
    R.line(lines, "fastSquare(5) again", fastSquare(5));
    R.line(lines, "log", JSON.stringify(computeLog));
    R.line(lines, "fastSquare(10)", fastSquare(10));
    R.line(lines, "log", JSON.stringify(computeLog));
    R.line(lines, "fastSquare(5) again", fastSquare(5));
    R.line(lines, "log", JSON.stringify(computeLog));
    R.note(lines, "cache lives in the closure returned by memoize().");

    R.show("#task4Output", lines);

})();
