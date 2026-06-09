// —— Practice task 1 — barrel (named + export * style merge)

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW1 · barrel surface — reference");
    lines.push("// pkg/index.js");
    lines.push("export { alpha } from \"./alpha.js\";");
    lines.push("export { beta } from \"./beta.js\";");
    lines.push("// consumer");
    lines.push("import { alpha, beta } from \"./pkg\";");
    R.blank(lines);

    const alpha = { alpha: function () {
        return "α";
    } };

    const beta = { beta: function () {
        return "β";
    } };

    const barrel = Object.assign({}, alpha, beta);

    R.section(lines, "Results (Object.assign simulates merged exports)");
    R.line(lines, "alpha()", barrel.alpha());
    R.line(lines, "beta()", barrel.beta());

    R.show("#homeworkOut1", lines);

})();



// —— Practice task 2 — dynamic import pattern

(function () {

    const R = RefOutput;

    const registry = {
        "./feature.js": function () {
            return { run: function () {
                return "feature-loaded";
            } };
        }
    };

    async function lazyLoad(path) {
        const factory = registry[path];
        const mod = factory();
        return mod.run();
    }

    lazyLoad("./feature.js").then(function (out) {
        const lines = [];
        R.section(lines, "HW2 · lazy route — reference");
        lines.push("const mod = await import(\"./feature.js\");");
        lines.push("return mod.run();");
        R.blank(lines);
        R.section(lines, "Result");
        R.line(lines, "lazyLoad(\"./feature.js\")", out);
        R.show("#homeworkOut2", lines);
    });

})();



// —— Practice task 3 — circular: broken vs fixed

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW3 · break cycles — reference");
    lines.push("// a.js and b.js importing each other at top level → hazard");
    lines.push("// extract shared state/helpers to c.js both import");
    R.blank(lines);

    const shared = { label: "ok" };

    function readA() {
        return shared.label;
    }

    function readB() {
        return shared.label;
    }

    R.section(lines, "Result (simulated shared module)");
    R.line(lines, "readA() | readB()", readA() + "|" + readB());
    R.line(lines, "pattern", "shared bindings in one module — avoid a↔b top-level cycles");

    R.show("#homeworkOut3", lines);

})();



// —— Bonus — default + namespace

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Bonus · default + namespace — reference");
    lines.push("import main, * as ns from \"./lib.js\";");
    lines.push("main();");
    lines.push("ns.a + ns.b;");
    R.blank(lines);

    function mainExport() {
        return "defaultFn";
    }

    const ns = {
        a: 1,
        b: 2
    };

    R.section(lines, "Results");
    R.line(lines, "main()", mainExport());
    R.line(lines, "ns.a + ns.b", ns.a + ns.b);

    R.show("#homeworkOut4", lines);

})();
