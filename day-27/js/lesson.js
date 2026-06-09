(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 · debounce (reference code)");
    lines.push("function debounce(fn, delay) {");
    lines.push("  let timer;");
    lines.push("  return function (...args) {");
    lines.push("    clearTimeout(timer);");
    lines.push("    timer = setTimeout(() => fn.apply(this, args), delay);");
    lines.push("  };");
    lines.push("}");
    R.line(lines, "idea", "reset timer on each call; run fn once after quiet period");
    R.blank(lines);

    R.section(lines, "Topic 1 · throttle (reference code)");
    lines.push("function throttle(fn, delay) {");
    lines.push("  let last = 0;");
    lines.push("  return function (...args) {");
    lines.push("    const now = Date.now();");
    lines.push("    if (now - last < delay) return;");
    lines.push("    last = now;");
    lines.push("    fn.apply(this, args);");
    lines.push("  };");
    lines.push("}");
    R.line(lines, "idea", "at most one run per window; drops bursts");
    R.blank(lines);

    R.section(lines, "Topic 2 · common leaks");
    lines.push("setInterval without clearInterval");
    lines.push("DOM removed but listener still references closure");
    lines.push("undeclared vars → implicit globals");
    R.line(lines, "big categories (lesson)", "4");
    R.blank(lines);

    R.section(lines, "Topic 3 · GC");
    R.line(lines, "idea", "unreachable objects can be collected");
    R.blank(lines);

    R.section(lines, "Topic 4 · User Timing API");
    lines.push("performance.mark('start');");
    lines.push("// ... work ...");
    lines.push("performance.mark('end');");
    lines.push("performance.measure('myOp', 'start', 'end');");
    R.line(lines, "DevTools", "Performance panel shows named span");
    R.blank(lines);

    R.section(lines, "Topic 5 · XSS");
    R.line(lines, "prefer", "textContent or trusted sanitiser");
    R.line(lines, "never", "eval(userInput)");
    R.blank(lines);

    R.section(lines, "Topic 6 · tooling");
    R.line(lines, "ESLint + Prettier", "formatOnSave + eslint.fixAll where safe");
    R.blank(lines);

    R.section(lines, "Topic 7 · style");
    R.line(lines, "default binding", "const by default; let when reassigned");

    R.show("#out", lines);

})();
