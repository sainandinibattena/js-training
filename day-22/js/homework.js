// Task 1

(function () {

    const R = RefOutput;
    const lines = [];

    function tagCounter(posts) {
        const counts = new Map();
        posts.forEach(function (post) {
            post.tags.forEach(function (tag) {
                counts.set(tag, (counts.get(tag) || 0) + 1);
            });
        });
        return counts;
    }

    const posts = [
        { title: "A", tags: ["js", "react"] },
        { title: "B", tags: ["js", "node"] },
        { title: "C", tags: ["react", "hooks"] }
    ];

    const counts = tagCounter(posts);

    R.line(lines, "js count", counts.get("js"));
    R.line(lines, "react count", counts.get("react"));
    R.line(lines, "node count", counts.get("node"));
    R.line(lines, "hooks count", counts.get("hooks"));
    R.line(lines, "Map size", counts.size);

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];

    function union(a, b) {
        return new Set([...a, ...b]);
    }

    function intersection(a, b) {
        return new Set([...a].filter(function (x) {
            return b.has(x);
        }));
    }

    function difference(a, b) {
        return new Set([...a].filter(function (x) {
            return !b.has(x);
        }));
    }

    const setA = new Set([1, 2, 3]);
    const setB = new Set([2, 3, 4]);

    R.line(lines, "union", JSON.stringify([...union(setA, setB)]));
    R.line(lines, "intersection", JSON.stringify([...intersection(setA, setB)]));
    R.line(lines, "difference A − B", JSON.stringify([...difference(setA, setB)]));

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];

    const ages = new Map([
        ["Priya", 25],
        ["Aarav", 30],
        ["Anaya", 22]
    ]);

    const sorted = [...ages.entries()].sort(function (a, b) {
        const [, ageA] = a;
        const [, ageB] = b;
        return ageA - ageB;
    });

    sorted.forEach(function (pair, index) {
        const [name, age] = pair;
        R.line(lines, "sorted[" + index + "]", name + ", " + age);
    });

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];

    const clickCounts = new WeakMap();

    function trackClick(button) {
        const current = clickCounts.get(button) || 0;
        clickCounts.set(button, current + 1);
        return clickCounts.get(button);
    }

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    trackClick(saveBtn);
    trackClick(saveBtn);
    trackClick(cancelBtn);

    R.line(lines, "saveBtn clicks", clickCounts.get(saveBtn));
    R.line(lines, "cancelBtn clicks", clickCounts.get(cancelBtn));
    R.note(lines, "WeakMap: when a button node is removed and unreferenced, its count entry can be GC'd — avoids leaks vs a plain Map holding DOM nodes forever.");

    R.show("#homeworkOut4", lines);

})();
