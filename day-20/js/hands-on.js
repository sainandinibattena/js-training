// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "output order", "1, 4, 3, 2");
    R.line(lines, 'console.log("1")', "sync");
    R.line(lines, 'console.log("4")', "sync");
    R.line(lines, 'Promise.then → console.log("3")', "microtask");
    R.line(lines, 'setTimeout(0) → console.log("2")', "macrotask");
    R.note(lines, "Microtasks drain completely before the next macrotask runs.");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "output order", "A, F, C, E, D, B");
    R.line(lines, "sync", "A, F");
    R.line(lines, "microtasks (drained)", "C → E → D (D queued when C runs)");
    R.line(lines, "macrotask", "B");
    R.note(lines, "Chained .then schedules D as a new microtask; queueMicrotask(E) was queued before C ran.");

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    function blockFor(ms) {
        const t0 = Date.now();
        while (Date.now() - t0 < ms) {}
    }

    R.line(lines, "blockFor(2000) on stack", "timer cannot run during busy-wait");
    R.line(lines, "log order", "done blocking → after block → timer");
    R.line(lines, "timer delay scheduled", "100ms — but fires only after stack is free (~2000ms+ later)");
    R.note(lines, "Reference uses static order; run blockFor yourself to feel the freeze.");

    R.show("#task3Output", lines);

})();



// —— Task 4 (Bonus) — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "5 setTimeout(0) scheduled", "macrotasks T1–T5 queued");
    R.line(lines, "first macrotask runs", "schedules microtasks M1, M2, M3");
    R.line(lines, "before T2 runs", "ALL microtasks in that tick drain (M1, M2, M3)");
    R.line(lines, "then", "remaining macrotasks T2–T5 run one per loop turn");
    R.line(lines, "sample log order", "t1, m1, m2, m3, t2, t3, t4, t5");
    R.note(lines, "First timer logs t1 on the stack, then microtasks drain, then the other timers run.");

    let log = [];
    let timerIndex = 0;

    function scheduleStorm() {
        for (let i = 0; i < 5; i += 1) {
            const n = i + 1;
            setTimeout(function () {
                if (n === 1) {
                    Promise.resolve().then(function () {
                        log.push("m1");
                    });
                    Promise.resolve().then(function () {
                        log.push("m2");
                    });
                    Promise.resolve().then(function () {
                        log.push("m3");
                    });
                }
                log.push("t" + n);
                timerIndex += 1;
                if (timerIndex === 5) {
                    R.line(lines, "actual run order", log.join(", "));
                    R.show("#task4Output", lines);
                }
            }, 0);
        }
    }

    scheduleStorm();

})();
