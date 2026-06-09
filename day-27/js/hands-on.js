// —— Task 1 — debounce + scheduled keystrokes

(function () {

    const R = RefOutput;

    function debounce(fn, delay) {
        let timer;
        return function () {
            const args = arguments;
            const ctx = this;
            window.clearTimeout(timer);
            timer = window.setTimeout(function () {
                fn.apply(ctx, args);
            }, delay);
        };
    }

    const calls = [];
    const handleSearch = debounce(function (q) {
        calls.push(q);
    }, 300);

    const schedule = [
        [0, "a"],
        [50, "ab"],
        [100, "abc"],
        [150, "abcd"],
        [200, "abcde"],
        [700, "abcdeE"],
        [750, "abcdeEE"]
    ];

    schedule.forEach(function (pair) {
        window.setTimeout(function () {
            handleSearch(pair[1]);
        }, pair[0]);
    });

    window.setTimeout(function () {
        const lines = [];
        R.section(lines, "Task 1 · debounce — reference code");
        lines.push("function debounce(fn, delay) {");
        lines.push("  let timer;");
        lines.push("  return function () {");
        lines.push("    clearTimeout(timer);");
        lines.push("    timer = setTimeout(() => fn.apply(this, arguments), delay);");
        lines.push("  };");
        lines.push("}");
        R.blank(lines);
        R.section(lines, "Schedule (ms → query)");
        lines.push("0→a  50→ab  100→abc  150→abcd  200→abcde");
        lines.push("gap >300ms quiet");
        lines.push("700→abcdeE  750→abcdeEE  (second burst)");
        R.blank(lines);
        R.line(lines, "handleSearch invocations (expect 2)", calls.length);
        R.line(lines, "final queries", calls.join(" | "));
        R.note(lines, "First burst collapses to one call after 300ms quiet; second burst adds one more.");
        R.show("#task1Output", lines);
    }, 1200);

})();



// —— Task 2 — throttle + tight loop

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 2 · throttle — reference code");
    lines.push("function throttle(fn, delay) {");
    lines.push("  let lastCall = 0;");
    lines.push("  return function () {");
    lines.push("    const now = Date.now();");
    lines.push("    if (now - lastCall < delay) return;");
    lines.push("    lastCall = now;");
    lines.push("    fn.apply(this, arguments);");
    lines.push("  };");
    lines.push("}");
    R.blank(lines);
    R.section(lines, "This page");
    lines.push("for (let i = 0; i < 10; i++) run();  // run is throttled(500ms)");
    R.blank(lines);

    function throttle(fn, delay) {
        let lastCall = 0;
        return function () {
            const args = arguments;
            const ctx = this;
            const now = Date.now();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            fn.apply(ctx, args);
        };
    }

    let count = 0;
    const run = throttle(function () {
        count++;
    }, 500);

    for (let i = 0; i < 10; i++) {
        run();
    }

    R.line(lines, "throttle(500ms) · 10 sync calls · count", count);
    R.note(lines, "All 10 calls share the same clock tick → first runs, rest return early.");

    R.show("#task2Output", lines);

})();



// —— Task 3 — leak / safe labels

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 3 · patterns (what to remember)");
    lines.push("// (a) setInterval in SPA without cleanup");
    lines.push("const id = setInterval(tick, 1000);");
    lines.push("// on route leave: clearInterval(id)  ← missing → leak");
    R.blank(lines);
    lines.push("// (b) listener on element that is removed from DOM");
    lines.push("btn.addEventListener('click', handler);");
    lines.push("// btn removed but handler/closure may still be reachable");
    R.blank(lines);
    lines.push("// (c) typo creates global");
    lines.push("myVar = 1;  // strict mode throws; sloppy → leak");
    R.blank(lines);
    lines.push("// (d) React useEffect cleanup");
    lines.push("return () => clearInterval(id);  // safe");
    R.blank(lines);
    R.line(lines, "(a) setInterval no cleanup on unmount", "leak · timer keeps firing");
    R.line(lines, "(b) listener + btn.remove()", "leak risk · detach DOM + retained listener");
    R.line(lines, "(c) undeclared assignment", "leak / bad · implicit global");
    R.line(lines, "(d) useEffect + clearInterval cleanup", "safe");

    R.show("#task3Output", lines);

})();



// —— Bonus — safeText

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Bonus · safeText — reference code");
    lines.push("function safeText(html) {");
    lines.push("  return String(html)");
    lines.push("    .replace(/<[^>]*>/g, ' ')");
    lines.push("    .replace(/\\s+/g, ' ')");
    lines.push("    .trim();");
    lines.push("}");
    R.blank(lines);

    function safeText(html) {
        return String(html)
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    const raw = "<img src=x onerror=\"alert(1)\"> hello";
    const plain = safeText(raw);

    R.section(lines, "Example");
    lines.push("raw:  " + raw);
    R.line(lines, "safeText(raw)", plain);
    R.note(lines, "Tags become spaces; use a real sanitizer for HTML you must keep.");

    R.show("#task4Output", lines);

})();
