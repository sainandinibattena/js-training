// Task 1

(function () {

    const R = RefOutput;
    const lines = [];


    function multiplier(factor) {
        return function (n) {
            return n * factor;
        };
    }

    const double = multiplier(2);
    const triple = multiplier(3);

    R.line(lines, "double(10)", double(10));
    R.line(lines, "triple(10)", triple(10));
    R.line(lines, "double(7)", double(7));
    R.note(lines, "Each multiplier() call creates its own closure with its own factor.");

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];


    function letForOfLogs() {
        const logs = [];
        const values = [10, 20, 30];
        for (let val of values) {
            logs.push(function () {
                return val;
            });
        }
        return logs.map(function (fn) {
            return fn();
        }).join(", ");
    }

    R.line(lines, "for (let val of [10, 20, 30]) setTimeout logs", letForOfLogs());
    R.note(lines, "let gives a fresh val per iteration — same idea as the let loop fix.");

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];


    function createAccount(initial) {
        let balance = initial;
        let transactionCount = 0;

        return {
            deposit: function (amount) {
                balance += amount;
                transactionCount++;
            },
            withdraw: function (amount) {
                balance -= amount;
                transactionCount++;
            },
            getBalance: function () {
                return balance;
            },
            getTransactionCount: function () {
                return transactionCount;
            }
        };
    }

    const account = createAccount(1000);
    account.deposit(500);
    account.withdraw(200);

    R.line(lines, "getBalance()", account.getBalance());
    R.line(lines, "getTransactionCount()", account.getTransactionCount());

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];


    function once(fn) {
        let called = false;
        let cached;
        return function () {
            if (!called) {
                called = true;
                cached = fn();
            }
            return cached;
        };
    }

    let runCount = 0;
    const greetOnce = once(function () {
        runCount++;
        return "Hello!";
    });

    R.line(lines, "greetOnce() first", greetOnce());
    R.line(lines, "greetOnce() second", greetOnce());
    R.line(lines, "fn actually ran times", runCount);

    R.show("#homeworkOut4", lines);

})();



// Task 5

(function () {

    const R = RefOutput;
    const lines = [];


    R.line(lines, "Reading", "javascript.info/closure (full chapter)");
    R.line(lines, "Reading", "javascript.info/var");

    R.show("#homeworkOut5", lines);

})();



// Task 6

(function () {

    const R = RefOutput;
    const lines = [];


    R.line(lines, "Bonus video", "Namaste JS Episode 10 — Closures (~15 min)");

    R.show("#homeworkOut6", lines);

})();
