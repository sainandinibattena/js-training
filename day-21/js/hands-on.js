// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const orig = { name: "Priya", addr: { city: "Jaipur" } };
    const copy = { ...orig };

    copy.addr.city = "Mumbai";

    R.line(lines, "shallow copy — orig.addr.city", orig.addr.city);
    R.line(lines, "copy.addr === orig.addr", copy.addr === orig.addr);

    const deep = structuredClone(orig);
    deep.addr.city = "Delhi";

    R.line(lines, "structuredClone — orig.addr.city", orig.addr.city);
    R.line(lines, "deep.addr === orig.addr", deep.addr === orig.addr);

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const state = {
        user: {
            name: "Priya",
            prefs: { theme: "light", lang: "en" }
        }
    };

    const next = {
        ...state,
        user: {
            ...state.user,
            prefs: {
                ...state.user.prefs,
                theme: "dark"
            }
        }
    };

    R.line(lines, "next.user.prefs.theme", next.user.prefs.theme);
    R.line(lines, "state.user.prefs.theme (unchanged)", state.user.prefs.theme);
    R.line(lines, "state === next", state === next);

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    const tasks = [
        { id: 1, title: "Learn JS", done: false },
        { id: 2, title: "Build app", done: false }
    ];

    function toggleDone(list, id) {
        return list.map(function (task) {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
    }

    const after1 = toggleDone(tasks, 1);
    const after2 = toggleDone(tasks, 2);

    R.line(lines, "after1[0].done", after1[0].done);
    R.line(lines, "tasks[0].done (unchanged)", tasks[0].done);
    R.line(lines, "after2[1].done", after2[1].done);
    R.line(lines, "tasks[1].done (unchanged)", tasks[1].done);
    R.line(lines, "tasks === after1", tasks === after1);

    R.show("#task3Output", lines);

})();



// —— Task 4 (Bonus) — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

  function readCity(data) {
        return data?.user?.profile?.city ?? "Unknown";
    }

    function readBioLength(data) {
        return data?.user?.profile?.bio?.length ?? 0;
    }

    const data = {
        user: { name: "Priya", profile: { city: null } }
    };

    R.line(lines, "city with partial data", readCity(data));
    R.line(lines, "bio length", readBioLength(data));

    const empty = {};

    R.line(lines, "city with data = {}", readCity(empty));
    R.line(lines, "bio length with data = {}", readBioLength(empty));

    R.show("#task4Output", lines);

})();
