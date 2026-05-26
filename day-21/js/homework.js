// Task 1

(function () {

    const R = RefOutput;
    const lines = [];

    const original = {
        a: {
            b: {
                c: {
                    d: { value: 1, shared: { tag: "keep" } }
                }
            }
        },
        side: { x: 10 }
    };

    const updated = {
        ...original,
        a: {
            ...original.a,
            b: {
                ...original.a.b,
                c: {
                    ...original.a.b.c,
                    d: {
                        ...original.a.b.c.d,
                        value: 99
                    }
                }
            }
        }
    };

    R.line(lines, "updated leaf value", updated.a.b.c.d.value);
    R.line(lines, "original leaf value", original.a.b.c.d.value);
    R.line(lines, "unchanged side branch ===", updated.side === original.side);
    R.line(lines, "unchanged shared nested ===", updated.a.b.c.d.shared === original.a.b.c.d.shared);
    R.line(lines, "changed d object ===", updated.a.b.c.d === original.a.b.c.d);

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];

    function deepFreeze(obj) {
        Object.values(obj).forEach(function (value) {
            if (value && typeof value === "object") {
                deepFreeze(value);
            }
        });
        return Object.freeze(obj);
    }

    const nested = {
        level1: {
            level2: {
                level3: { score: 5 }
            }
        }
    };

    deepFreeze(nested);

    nested.level1.level2.level3.score = 99;
    nested.level1.level2.newKey = "oops";

    R.line(lines, "score after mutate attempt", nested.level1.level2.level3.score);
    R.line(lines, "newKey added?", "newKey" in nested.level1.level2);
    R.line(lines, "Object.isFrozen(root)", Object.isFrozen(nested));
    R.line(lines, "Object.isFrozen(level3)", Object.isFrozen(nested.level1.level2.level3));

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "1 — Date objects", "structuredClone keeps real Date; JSON becomes string");
    R.line(lines, "2 — Map and Set", "structuredClone copies Map/Set; JSON loses them");
    R.line(lines, "3 — undefined and typed arrays", "structuredClone preserves undefined in objects and clones ArrayBuffer views; JSON drops undefined");

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];

    function pick(obj, keys) {
        return keys.reduce(function (acc, key) {
            if (!(key in obj)) {
                return acc;
            }
            const { [key]: value } = obj;
            return { ...acc, [key]: value };
        }, {});
    }

    const user = { name: "Priya", age: 25, city: "Jaipur", role: "dev" };
    const picked = pick(user, ["name", "city"]);

    R.line(lines, "pick(user, [\"name\", \"city\"])", JSON.stringify(picked));
    R.line(lines, "original unchanged", JSON.stringify(user));
    R.line(lines, "picked !== user", picked !== user);

    R.show("#homeworkOut4", lines);

})();
