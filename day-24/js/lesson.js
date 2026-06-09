(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 · static import shapes");
    lines.push("import { formatPrice } from \"./price.js\";   // named");
    lines.push("import Card from \"./Card.jsx\";             // default (any local name)");
    R.line(lines, "named · formatPrice(100)", "₹100");
    R.line(lines, "default · local name", "Card component");
    R.blank(lines);

    R.section(lines, "Topic 2 · namespace import");
    lines.push("import * as utils from \"./tax.js\";");
    lines.push("utils.gst(100, 18);");
    R.line(lines, "utils.gst(100, 18)", 18);
    R.blank(lines);

    R.section(lines, "Topic 3 · barrel (re-export)");
    lines.push("// components/index.js");
    lines.push("export { Button } from \"./Button.js\";");
    lines.push("export { Card } from \"./Card.js\";");
    R.line(lines, "import { Button, Card } from \"./components\"", "one path ./components");
    R.blank(lines);

    R.section(lines, "Topic 4 · dynamic import()");
    lines.push("const mod = await import(\"./heavy.js\");");
    lines.push("mod.compute();");
    R.line(lines, "await import('./heavy') · then compute()", "computed!");
    R.blank(lines);

    R.section(lines, "Topic 5 · live bindings + singleton");
    lines.push("// exported let can update importers; const object still same ref");
    R.line(lines, "live binding · count after inc()", 1);
    R.line(lines, "singleton Map · same object everywhere", "shared");
    R.blank(lines);

    R.section(lines, "Topic 6 · circular modules");
    lines.push("// symptom: read partner export at top level before init → undefined");
    lines.push("// fix: read inside a function after both modules evaluated");
    R.line(lines, "circular symptom", "undefined at top-level read");
    R.line(lines, "fix · lazy read in function", "A|B");
    R.blank(lines);

    R.section(lines, "Topic 7 · bundlers");
    R.line(lines, "Vite dev", "esbuild transform + native ESM");
    R.line(lines, "Rollup strength", "tree-shake + small bundles");

    R.show("#out", lines);

})();
