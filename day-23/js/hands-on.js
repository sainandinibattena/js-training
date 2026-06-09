// —— Task 1 — reference solution

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 1 · iterable range — reference code");
    lines.push("const range = (from, to) => ({");
    lines.push("  [Symbol.iterator]() {");
    lines.push("    let current = from;");
    lines.push("    return {");
    lines.push("      next() {");
    lines.push("        if (current <= to) return { value: current++, done: false };");
    lines.push("        return { value: undefined, done: true };");
    lines.push("      }");
    lines.push("    };");
    lines.push("  }");
    lines.push("});");
    R.blank(lines);

    function range(from, to) {
        return {
            from: from,
            to: to,
            [Symbol.iterator]() {
                let current = this.from;
                const last = this.to;
                return {
                    next() {
                        if (current <= last) {
                            return { value: current++, done: false };
                        }
                        return { value: undefined, done: true };
                    }
                };
            }
        };
    }

    const a = [];
    for (const n of range(3, 7)) {
        a.push(n);
    }

    R.section(lines, "Results");
    R.line(lines, "range(3, 7) · for...of → joined", a.join(", "));
    R.line(lines, "range(3, 7) · [...spread]", [...range(3, 7)]);
    R.line(lines, "range(1, 3) · [...spread]", [...range(1, 3)]);
    R.note(lines, "for...of and [... ] both call @@iterator → next() until done.");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 2 · generator range — reference code");
    lines.push("function* rangeGen(from, to) {");
    lines.push("  for (let i = from; i <= to; i++) yield i;");
    lines.push("}");
    R.blank(lines);

    function* rangeGen(from, to) {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    }

    const a = [];
    for (const n of rangeGen(3, 7)) {
        a.push(n);
    }

    R.section(lines, "Results");
    R.line(lines, "rangeGen(3, 7) · for...of → joined", a.join(", "));
    R.line(lines, "rangeGen(3, 7) · [...spread]", [...rangeGen(3, 7)]);
    R.line(lines, "rangeGen(1, 3) · [...spread]", [...rangeGen(1, 3)]);

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 3 · take(iterable, n) — reference code");
    lines.push("function take(iterable, n) {");
    lines.push("  const it = iterable[Symbol.iterator]();");
    lines.push("  const out = [];");
    lines.push("  for (let i = 0; i < n; i++) {");
    lines.push("    const step = it.next();");
    lines.push("    if (step.done) break;");
    lines.push("    out.push(step.value);");
    lines.push("  }");
    lines.push("  return out;");
    lines.push("}");
    R.blank(lines);
    lines.push("function* naturals() { let k = 1; while (true) yield k++; }");
    R.blank(lines);

    function take(iterable, n) {
        const it = iterable[Symbol.iterator]();
        const out = [];
        for (let i = 0; i < n; i++) {
            const step = it.next();
            if (step.done) {
                break;
            }
            out.push(step.value);
        }
        return out;
    }

    function* naturals() {
        let k = 1;
        while (true) {
            yield k++;
        }
    }

    R.section(lines, "Results");
    R.line(lines, "take(naturals(), 5)", take(naturals(), 5));
    R.line(lines, "take(naturals(), 3)", take(naturals(), 3));
    R.note(lines, "take pulls only n values; infinite generator stays lazy.");

    R.show("#task3Output", lines);

})();



// —— Task 4 (Bonus) — reference solution

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 4 · tree walk — reference code");
    lines.push("function* walk(node) {");
    lines.push("  yield node.value;");
    lines.push("  for (const child of node.children) yield* walk(child);");
    lines.push("}");
    R.blank(lines);

    const tree = {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    { value: 3, children: [] }
                ]
            },
            { value: 4, children: [] }
        ]
    };

    function* walk(node) {
        yield node.value;
        for (let i = 0; i < node.children.length; i++) {
            yield* walk(node.children[i]);
        }
    }

    R.section(lines, "Result");
    R.line(lines, "[...walk(tree)] (depth-first)", [...walk(tree)]);

    R.show("#task4Output", lines);

})();
