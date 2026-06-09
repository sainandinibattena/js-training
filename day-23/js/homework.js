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



// —— Practice task 1

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW1 · chunked — reference code");
    lines.push("function* chunked(arr, size) {");
    lines.push("  for (let i = 0; i < arr.length; i += size)");
    lines.push("    yield arr.slice(i, i + size);");
    lines.push("}");
    R.blank(lines);

    function* chunked(arr, size) {
        for (let i = 0; i < arr.length; i += size) {
            yield arr.slice(i, i + size);
        }
    }

    R.section(lines, "Results");
    R.line(lines, "[1,2,3,4,5] · size 2 · [...chunked]", [...chunked([1, 2, 3, 4, 5], 2)]);
    R.line(lines, "[1,2,3] · size 2 · [...chunked]", [...chunked([1, 2, 3], 2)]);

    R.show("#homeworkOut1", lines);

})();



// —— Practice task 2

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW2 · primes generator — reference code");
    lines.push("function* primes() {");
    lines.push("  let n = 2;");
    lines.push("  while (true) { if (isPrime(n)) yield n; n++; }");
    lines.push("}");
    lines.push("// take(primes(), k) uses shared take() above");
    R.blank(lines);

    function isPrime(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function* primes() {
        let n = 2;
        while (true) {
            if (isPrime(n)) {
                yield n;
            }
            n++;
        }
    }

    R.section(lines, "Results");
    R.line(lines, "take(primes(), 10)", take(primes(), 10));
    R.line(lines, "take(primes(), 5)", take(primes(), 5));

    R.show("#homeworkOut2", lines);

})();



// —— Practice task 3

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW3 · zip — reference code");
    lines.push("function* zip(a, b) {");
    lines.push("  const itA = a[Symbol.iterator](), itB = b[Symbol.iterator]();");
    lines.push("  while (true) {");
    lines.push("    const na = itA.next(), nb = itB.next();");
    lines.push("    if (na.done || nb.done) break;");
    lines.push("    yield [na.value, nb.value];");
    lines.push("  }");
    lines.push("}");
    R.blank(lines);

    function* zip(a, b) {
        const itA = a[Symbol.iterator]();
        const itB = b[Symbol.iterator]();
        while (true) {
            const na = itA.next();
            const nb = itB.next();
            if (na.done || nb.done) {
                break;
            }
            yield [na.value, nb.value];
        }
    }

    R.section(lines, "Results");
    R.line(lines, "zip([1,2,3], [\"a\",\"b\",\"c\"])", [...zip([1, 2, 3], ["a", "b", "c"])]);
    R.line(lines, "zip([1,2,3,4], [\"x\",\"y\"]) (stops at shorter)", [...zip([1, 2, 3, 4], ["x", "y"])]);

    R.show("#homeworkOut3", lines);

})();



// —— Practice task 4

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW4 · fib — reference code");
    lines.push("function* fib() {");
    lines.push("  let a = 0, b = 1;");
    lines.push("  while (true) { yield a; [a, b] = [b, a + b]; }");
    lines.push("}");
    R.blank(lines);

    function* fib() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            const next = a + b;
            a = b;
            b = next;
        }
    }

    R.section(lines, "Results");
    R.line(lines, "take(fib(), 10)", take(fib(), 10));
    R.line(lines, "take(fib(), 6)", take(fib(), 6));

    R.show("#homeworkOut4", lines);

})();



// —— Bonus

(function () {

    const R = RefOutput;

    (async function () {
        const lines = [];

        R.section(lines, "Bonus · async generator — reference code");
        lines.push("async function* oncePerTick() {");
        lines.push("  for (let i = 1; i <= 5; i++) {");
        lines.push("    await new Promise(r => setTimeout(r, 30));");
        lines.push("    yield \"tick \" + i;");
        lines.push("  }");
        lines.push("}");
        lines.push("// for await (const v of oncePerTick()) { ... }");
        R.blank(lines);

        async function* oncePerTick() {
            for (let i = 1; i <= 5; i++) {
                await new Promise(function (resolve) {
                    setTimeout(resolve, 30);
                });
                yield "tick " + i;
            }
        }

        const vals = [];
        for await (const v of oncePerTick()) {
            vals.push(v);
        }

        R.section(lines, "Results");
        R.line(lines, "for await…of · collected", vals);
        R.line(lines, "length", vals.length);

        R.show("#homeworkOut5", lines);
    })();

})();
