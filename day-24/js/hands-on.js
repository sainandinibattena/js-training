// —— Task 1 — same behaviour as math/*.js + math/index.js barrel + app import

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 1 · barrel-style math — reference");
    lines.push("// math/index.js re-exports:");
    lines.push("export { add, multiply, divide } from \"./ops.js\";");
    lines.push("// app.js");
    lines.push("import { add, multiply, divide } from \"./math\";");
    R.blank(lines);

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    const math = { add: add, multiply: multiply, divide: divide };

    R.section(lines, "Results (this page simulates one module object)");
    R.line(lines, "add(2, 3)", math.add(2, 3));
    R.line(lines, "multiply(2, 3)", math.multiply(2, 3));
    R.line(lines, "divide(6, 2)", math.divide(6, 2));

    R.show("#task1Output", lines);

})();



// —— Task 2 — default Button + named ButtonStyles

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 2 · default + named — reference");
    lines.push("import Button, { ButtonStyles } from \"./Button.js\";");
    R.blank(lines);

    function Button(props) {
        return "[Button " + (props && props.title ? props.title : "") + "]";
    }

    const ButtonStyles = { padding: 8, radius: 4 };

    R.section(lines, "Results");
    R.line(lines, "Button({ title: \"Save\" })", Button({ title: "Save" }));
    R.line(lines, "ButtonStyles.padding", ButtonStyles.padding);
    R.note(lines, "One import line: default first, named in { }.");

    R.show("#task2Output", lines);

})();



// —— Task 3 — dynamic import() → compute()

(function () {

    const R = RefOutput;

    function createHeavyModule() {
        return {
            compute: function () {
                return "computed!";
            }
        };
    }

    async function loadAndRun() {
        const mod = createHeavyModule();
        return mod.compute();
    }

    loadAndRun().then(function (result) {
        const lines = [];
        R.section(lines, "Task 3 · dynamic import — reference");
        lines.push("const mod = await import(\"./heavy.js\");");
        lines.push("return mod.compute();");
        R.blank(lines);
        R.section(lines, "Result (this page uses a factory instead of real import)");
        R.line(lines, "loadAndRun() →", result);
        R.show("#task3Output", lines);
    });

})();



// —— Bonus — singleton default Map, two “services”

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Bonus · shared Map singleton — reference");
    lines.push("const cache = new Map();  // one module-level instance");
    lines.push("export function writeUser() { cache.set(\"user:1\", {...}); }");
    lines.push("export function writeProduct() { cache.set(\"product:1\", {...}); }");
    R.blank(lines);

    const cache = new Map();

    function writeUser() {
        cache.set("user:1", { name: "Priya" });
    }

    function writeProduct() {
        cache.set("product:1", { sku: "pen" });
    }

    writeUser();
    writeProduct();

    R.section(lines, "Results");
    R.line(lines, "cache.size after both services", cache.size);
    R.line(lines, "cache.get(\"user:1\")", cache.get("user:1"));
    R.line(lines, "cache.get(\"product:1\")", cache.get("product:1"));

    R.show("#task4Output", lines);

})();
