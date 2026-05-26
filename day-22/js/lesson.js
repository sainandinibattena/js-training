(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 — Map");
    R.line(lines, "m.get(\"name\")", "Priya");
    R.line(lines, "m.get(userObj) with object key", "value associated with userObj");
    R.line(lines, "m.size after delete(42)", 3);
    R.line(lines, "two different object keys k1, k2", "m.size === 2");

    R.section(lines, "Topic 2 — Object ↔ Map");
    R.line(lines, "new Map(Object.entries(obj)).get(\"name\")", "Priya");
    R.line(lines, "Object.fromEntries(map)", '{ name: "Priya", city: "Jaipur" }');
    R.note(lines, "map.forEach callback order: (value, key) — value first.");

    R.section(lines, "Topic 3 — Set");
    R.line(lines, "Set after duplicate add", "size 2");
    R.line(lines, "dedupe [1,2,2,3,4,4,5]", "[1, 2, 3, 4, 5]");
    R.line(lines, "two { id: 1 } objects in Set", "size 2 (identity, not deep equality)");

    R.section(lines, "Topic 4 — Set operations");
    R.line(lines, "union [1,2,3] ∪ [2,3,4]", "[1, 2, 3, 4]");
    R.line(lines, "intersection", "[2, 3]");
    R.line(lines, "difference A − B", "[1]");

    R.section(lines, "Topic 6 — WeakMap / WeakSet");
    R.line(lines, "WeakMap keys", "objects only");
    R.line(lines, "iterable?", "no");
    R.line(lines, "when key is GC'd", "entry removed automatically");
    R.note(lines, "WeakMap is for metadata tied to an object lifetime — not a general cache.");

    R.show("#out", lines);

})();
