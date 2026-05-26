(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 — Shallow vs deep clone");
    R.line(lines, "spread clone mutates nested address on original", "Mumbai (shared reference)");
    R.line(lines, "JSON deep clone keeps original city after c mutate", "still Mumbai on original shallow path; JSON clone independent");
    R.line(lines, "JSON loses Date, Map, undefined", "types stripped or broken");

    R.section(lines, "Topic 2 — structuredClone");
    R.line(lines, "nested city after copy mutate", "Jaipur (original unchanged)");
    R.line(lines, "copy.date instanceof Date", true);
    R.line(lines, "copy.scores instanceof Map", true);

    R.section(lines, "Topic 3 — Object.freeze");
    R.line(lines, "frozen config.port after assign 9000", 8080);
    R.line(lines, "shallow freeze — nested address.city mutable", "Mumbai");
    R.line(lines, "deepFreeze nested x after assign 99", 2);

    R.section(lines, "Topic 4 — Immutable updates");
    R.cases(lines, [
        { label: "u1.age / user.age", value: "26 / 25" },
        { label: "u2.address.city / user.address.city", value: "Mumbai / Jaipur" },
        { label: "u3.hobbies length", value: "3 (user still 2)" },
        { label: "t1[0].done / tasks[0].done", value: "true / false" }
    ]);

    R.section(lines, "Topic 5 — Advanced destructuring");
    R.line(lines, "{ name, role = \"user\" }", "Priya, user");
    R.line(lines, "{ name: userName, role: userRole = \"user\" }", "Aarav, user");
    R.line(lines, "nested api host/port", "api.example.com, 8080");
    R.line(lines, "[first, second, ...rest]", "1, 2, [3,4,5]");

    R.section(lines, "Topic 6 — Computed keys");
    R.line(lines, "{ [field]: value }", "{ city: \"Mumbai\" }");
    R.line(lines, "updateField(user, \"age\", 26).age", 26);

    R.section(lines, "Topic 7 — ?. and ??");
    R.line(lines, "response?.user?.profile?.city", "undefined");
    R.line(lines, "city ?? \"Unknown\"", "Unknown");
    R.line(lines, "response?.user?.name?.toUpperCase?.()", "PRIYA");
    R.line(lines, "tags?.[0] ?? \"no tags\"", "no tags");

    R.show("#out", lines);

})();
