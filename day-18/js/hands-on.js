// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, 'console.log("A")', "A");
    R.line(lines, 'console.log("C")', "C");
    R.line(lines, 'Promise.resolve().then(() => console.log("D"))', "D");
    R.line(lines, 'setTimeout(() => console.log("B"), 0)', "B");
    R.line(lines, "output order", "A, C, D, B");
    R.note(lines, "D runs before B: Promise.then is a microtask; setTimeout is a macrotask. Microtasks run before the next macrotask.");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    function delayLog(msg, ms, cb) {
        setTimeout(function () {
            console.log(msg);
            cb(null);
        }, ms);
    }

    function delayLogPromise(msg, ms) {
        return new Promise(function (resolve) {
            delayLog(msg, ms, function () {
                resolve();
            });
        });
    }

    R.line(lines, "delayLogPromise chain logs", "1 → 2 → 3");
    R.line(lines, "delays", "300ms, then 200ms, then 100ms");
    R.line(lines, "total time", "~600ms");

    delayLogPromise("1", 300)
        .then(function () {
            return delayLogPromise("2", 200);
        })
        .then(function () {
            return delayLogPromise("3", 100);
        });

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const prices = { pen: 50, book: 200, bag: 800 };

    function fetchPrice(item, ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ item: item, price: prices[item] });
            }, ms);
        });
    }

    const start = Date.now();

    Promise.all([
        fetchPrice("pen", 300),
        fetchPrice("book", 500),
        fetchPrice("bag", 800)
    ]).then(function (results) {
        const total = results.reduce(function (sum, row) {
            return sum + row.price;
        }, 0);
        const elapsed = Date.now() - start;

        R.line(lines, "prices", JSON.stringify(results));
        R.line(lines, "total", total);
        R.line(lines, "elapsed (ms)", elapsed);
        R.line(lines, "near slowest item (800ms)?", elapsed >= 700 && elapsed < 950 ? "yes" : "check timing");

        R.show("#task3Output", lines);
    });

})();



// —— Bonus Task — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const p1 = Promise.resolve("ok1");
    const p2 = Promise.reject(new Error("fail"));
    const p3 = Promise.resolve("ok2");

    Promise.all([p1, p2, p3]).catch(function (err) {
        R.line(lines, "Promise.all", "rejects → " + err.message);
    });

    Promise.allSettled([p1, p2, p3]).then(function (results) {
        R.line(lines, "Promise.allSettled[0]", results[0].status + " → " + results[0].value);
        R.line(lines, "Promise.allSettled[1]", results[1].status + " → " + results[1].reason.message);
        R.line(lines, "Promise.allSettled[2]", results[2].status + " → " + results[2].value);
        R.note(lines, "Use .all when you need every success; use .allSettled when you need every outcome.");

        R.show("#task4Output", lines);
    });

})();
