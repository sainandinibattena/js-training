// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const products = new Map([
        ["pen", 50],
        ["book", 200],
        ["bag", 800]
    ]);

    for (const [item, price] of products) {
        R.line(lines, "for...of " + item, "item: ₹" + price);
    }

    R.line(lines, "products.has(\"book\")", products.has("book"));
    R.line(lines, "products.get(\"pen\")", products.get("pen"));
    products.delete("bag");
    R.line(lines, "size after delete bag", products.size);

    const asObj = Object.fromEntries(products);
    const backToMap = new Map(Object.entries(asObj));

    R.line(lines, "Object.fromEntries", JSON.stringify(asObj));
    R.line(lines, "backToMap.get(\"pen\")", backToMap.get("pen"));

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const ids = [101, 102, 103, 101, 104, 102, 105];
    const unique = [...new Set(ids)];

    R.line(lines, "deduplicated IDs", JSON.stringify(unique));
    R.line(lines, "unique count", unique.length);

    const mixed = [1, "1", 1, true, 1n];
    const mixedUnique = [...new Set(mixed)];

    R.line(lines, "mixed Set size (predict 4)", mixedUnique.length);
    R.line(lines, "mixed unique values", JSON.stringify(mixedUnique.map(String)));

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    function memoize(fn) {
        const cache = new Map();
        return function (arg) {
            if (cache.has(arg)) {
                return cache.get(arg);
            }
            const result = fn(arg);
            cache.set(arg, result);
            return result;
        };
    }

    const logs = [];

    function expensiveSquare(n) {
        logs.push("computing...");
        return n * n;
    }

    const square = memoize(expensiveSquare);

    R.line(lines, "first call square(5)", square(5));
    R.line(lines, "second call square(5)", square(5));
    R.line(lines, "computing... logged times", logs.length);
    R.line(lines, "result both calls", 25);

    R.show("#task3Output", lines);

})();



// —— Task 4 (Bonus) — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const store = new WeakMap();

    function attach(obj, data) {
        store.set(obj, data);
    }

    function get(obj) {
        return store.get(obj);
    }

    const btn1 = { id: "btn-save" };
    const btn2 = { id: "btn-cancel" };

    attach(btn1, { lastClick: Date.now() });
    attach(btn2, { lastClick: Date.now() + 1 });

    R.line(lines, "get(btn1).lastClick exists", typeof get(btn1).lastClick === "number");
    R.line(lines, "get(btn2).lastClick exists", typeof get(btn2).lastClick === "number");

    R.note(lines, "Drop btn1 reference; WeakMap entry can be GC'd without leaking memory.");

    R.show("#task4Output", lines);

})();
