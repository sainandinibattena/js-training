(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 — Single-threaded");
    R.line(lines, "call stack", "one statement at a time");
    R.line(lines, "async work", "delegated to Web APIs; callbacks queued when done");

    R.section(lines, "Topic 3 — Event loop algorithm");
    R.line(lines, "step 1", "wait until call stack is empty");
    R.line(lines, "step 2", "drain ALL microtasks");
    R.line(lines, "step 3", "run ONE macrotask");
    R.line(lines, "step 4", "repeat");

    R.section(lines, "Topic 4 — setTimeout(0) mystery");
    R.line(lines, 'log("1"); log("4"); then microtask "3"; then macrotask "2"', "1, 4, 3, 2");
    R.line(lines, "X, W, Y, Z puzzle", "X, W, Y, Z");

    R.section(lines, "Topic 5 — Microtask vs macrotask");
    R.line(lines, "five-log puzzle", "A, F, C, E, D, B");
    R.cases(lines, [
        { label: "microtask", value: "Promise.then, queueMicrotask, await continuation" },
        { label: "macrotask", value: "setTimeout, setInterval, I/O, UI events" }
    ]);

    R.section(lines, "Topic 6 — Don't block the loop");
    R.line(lines, "blocking() then after block then timer", "done blocking → after block → timer (after ~3s freeze)");

    R.section(lines, "Topic 7 — Practical implications");
    R.line(lines, "Promise callbacks vs timers", "microtasks run before macrotasks");
    R.line(lines, "setTimeout(0)", "after sync + all microtasks");
    R.line(lines, "await", "same ordering as .then");

    R.show("#out", lines);

})();
