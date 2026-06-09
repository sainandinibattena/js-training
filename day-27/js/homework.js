// —— Practice task 1 — performance.mark / measure

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW1 · measure — reference code");
    lines.push("performance.mark('hw-demo-start');");
    lines.push("// ... work ...");
    lines.push("performance.mark('hw-demo-end');");
    lines.push("performance.measure('hw-demo', 'hw-demo-start', 'hw-demo-end');");
    lines.push("const e = performance.getEntriesByName('hw-demo')[0];");
    lines.push("// e.duration in ms");
    R.blank(lines);

    if (typeof performance !== "undefined" && performance.mark && performance.measure) {
        performance.mark("hw-demo-start");
        let s = 0;
        for (let i = 0; i < 50000; i++) {
            s += i % 7;
        }
        performance.mark("hw-demo-end");
        performance.measure("hw-demo", "hw-demo-start", "hw-demo-end");
        const entries = performance.getEntriesByName("hw-demo");
        const dur = entries.length ? entries[0].duration : 0;
        R.line(lines, "measure hw-demo · duration (ms)", Math.round(dur * 100) / 100);
        R.note(lines, "Clear marks/measures when done so repeated runs stay readable.");
        performance.clearMarks("hw-demo-start");
        performance.clearMarks("hw-demo-end");
        performance.clearMeasures("hw-demo");
    } else {
        R.line(lines, "performance.measure", "not available in this environment");
    }

    R.show("#homeworkOut1", lines);

})();



// —— Practice task 2 — Promise.all

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW2 · Promise.all — reference code");
    lines.push("Promise.all([p1, p2, p3]).then((values) => {");
    lines.push("  // values[i] matches input order, not resolve order");
    lines.push("});");
    lines.push("");
    lines.push("// rejects if any input promise rejects (AggregateError in modern engines)");
    R.blank(lines);
    R.section(lines, "This page");
    lines.push("p1 = resolve('A') immediately");
    lines.push("p2 = resolve('B') after ~5ms");
    lines.push("p3 = resolve('C') immediately");

    const p1 = Promise.resolve("A");
    const p2 = new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve("B");
        }, 5);
    });
    const p3 = Promise.resolve("C");

    Promise.all([p1, p2, p3]).then(function (vals) {
        R.blank(lines);
        R.line(lines, "Promise.all order (array order)", vals.join(","));
        R.show("#homeworkOut2", lines);
    });

})();



// —— Practice task 3 — safeText variants

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW3 · safeText — reference code");
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

    R.section(lines, "Outputs");
    R.line(lines, "nested", safeText("<div><span>x</span></div>"));
    R.line(lines, "script tag stripped", safeText("<script>bad()</script>ok"));
    R.line(lines, "plain", safeText("  no tags  "));

    R.show("#homeworkOut3", lines);

})();
