(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 · for...of");
    lines.push("for (const x of iterable) { /* uses @@iterator */ }");
    R.line(lines, "for...of [\"a\",\"b\",\"c\"]", ["a", "b", "c"]);
    R.blank(lines);

    R.section(lines, "Topic 2 · iterable object + Symbol.iterator");
    lines.push("const obj = {");
    lines.push("  [Symbol.iterator]() { /* return { next() {...} } */ }");
    lines.push("};");
    R.line(lines, "[...range(1,5)]", [1, 2, 3, 4, 5]);
    R.blank(lines);

    R.section(lines, "Topic 3 · generator function*");
    lines.push("function* gen() { yield 1; yield 2; }");
    R.line(lines, "generator · spread same range as Topic 2", [1, 2, 3, 4, 5]);
    R.blank(lines);

    R.section(lines, "Topic 4 · idGen + fib");
    lines.push("function* idGen() { let n = 1; while (true) yield n++; }");
    lines.push("function* fib() { let a=0,b=1; while (true) { yield a; [a,b]=[b,a+b]; } }");
    R.line(lines, "idGen · 3× next().value (as list)", [1, 2, 3]);
    R.line(lines, "fib · first 10", [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    R.blank(lines);

    R.section(lines, "Topic 5 · yield* delegation + flatten");
    lines.push("function* b() { yield* otherGenerator(); }");
    lines.push("function* flatten(arr) { for (const x of arr) yield* x; }");
    R.line(lines, "[...b()]", [0, 1, 2, 10, 20, 99]);
    R.line(lines, "[...flatten]", [1, 2, 3, 4, 5, 6]);
    R.blank(lines);

    R.section(lines, "Topic 6 · two-way communication · next(arg)");
    lines.push("const it = gen(); it.next();      // first question");
    lines.push("it.next(userAnswer);            // inject into yield");
    R.line(lines, "next() · value 1", "What's your name?");
    R.line(lines, "next(\"Priya\") · value 2", "Hi Priya! How old?");
    R.line(lines, "next(25) · value 3", "Priya, 25, recorded.");
    R.blank(lines);

    R.section(lines, "Topic 7 · pagination");
    R.line(lines, "paginate · all items", ["pen", "book", "bag", "mug", "lamp", "fan", "chair", "desk", "rug", "plant", "vase"]);

    R.show("#out", lines);

})();
