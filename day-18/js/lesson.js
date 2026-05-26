(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 1 — Sync vs async");
    R.line(lines, "sync console.log 1,2,3", "1, 2, 3");
    R.line(lines, "async setTimeout(0) between logs", "1, 3, 2");

    R.section(lines, "Topic 2 — Callbacks");
    R.line(lines, "fetchUser(7) first log", "Fetching user 7...");
    R.line(lines, "fetchUser(7) after 1s", 'Got user: {"id":7,"name":"Priya"}');

    R.section(lines, "Topic 4 — Promise states");
    R.line(lines, "pending then fulfilled", "resolve(\"Done!\") after async work");
    R.line(lines, "delay(500).then log", "half a second passed");

    R.section(lines, "Topic 5 — .then / .catch / .finally");
    R.cases(lines, [
        { label: "fetchUser(7) chain user", value: '{ id: 7, name: "Priya" }' },
        { label: "next user from chained .then", value: '{ id: 8, name: "Priya" }' },
        { label: ".finally runs", value: "done — runs whether success or fail" }
    ]);

    R.section(lines, "Topic 6 — Combinators");
    R.line(lines, "Promise.all — all must fulfill", "resolves with [user, orders, items] or rejects on first failure");
    R.line(lines, "Promise.allSettled — every outcome", "always resolves with status fulfilled/rejected per promise");
    R.line(lines, "Promise.race — first settles", "timeout pattern: first done wins");
    R.line(lines, "Promise.any — first fulfill", "first success or AggregateError if all reject");

    R.section(lines, "Topic 7 — Promise.resolve / reject");
    R.line(lines, "Promise.resolve cached user", '{ id: 1, name: "Priya" }');
    R.line(lines, "Promise.reject caught", "caught: nope");

    R.show("#out", lines);

})();
