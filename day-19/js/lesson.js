(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 — async always returns a Promise");
    R.line(lines, "greet() without await", "Promise { \"Namaste\" }");
    R.line(lines, "greet().then(msg)", "Namaste");
    R.line(lines, "plain return inside async", "wrapped as Promise.resolve(value)");

    R.section(lines, "Topic 2 — await pauses the async function");
    R.line(lines, "await fetchUser(7) then log", "got: { id: 7, name: \"Priya\" }");
    R.line(lines, "rest of program", "keeps running while this function waits");

    R.section(lines, "Topic 3 — try / catch / finally");
    R.cases(lines, [
        { label: "showUser(7)", value: "got: { id: 7, name: \"Priya\" } / done" },
        { label: "showUser(-1)", value: "failed: Bad id / done" }
    ]);

    R.section(lines, "Topic 4 — sequential vs parallel");
    R.line(lines, "slow() three await in a row", "~3000ms (sum of delays)");
    R.line(lines, "fast() await Promise.all([...])", "~1000ms (max of delays)");

    R.section(lines, "Topic 5 — forEach trap");
    R.line(lines, "forEach + async callback", "\"end\" logs before any \"got\"");
    R.line(lines, "fix: for...of", "awaits each iteration in order");
    R.line(lines, "fix: Promise.all + map", "parallel fetch, then log all");

    R.section(lines, "Topic 6 — top-level await");
    R.line(lines, "ES module script", "await fetch(...) at top level is OK");
    R.line(lines, "regular script", "SyntaxError — wrap in async IIFE");

    R.section(lines, "Topic 7 — mixing async with .then");
    R.line(lines, "getUserName(7).then(name)", "Priya");
    R.line(lines, "await getUserName(7)", "Priya");

    R.show("#out", lines);

})();
