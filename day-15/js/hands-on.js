// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const user = {
        name: "Priya",
        greet: function () {
            return this.name;
        }
    };

    R.line(lines, "user.greet()", user.greet());

    const g = user.greet;
    try {
        R.line(lines, "g()", g());
    } catch (err) {
        R.error(lines, "g()", err);
    }

    R.note(lines, "g() is a plain call — this is undefined (strict), so this.name throws or is lost.");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function runTicks(tickFn) {
        return [tickFn(), tickFn(), tickFn()].join(", ");
    }

    R.line(lines, "setInterval(t.tick) without fix", "TypeError: Cannot read properties of undefined");

    class Timer {
        constructor() {
            this.sec = 0;
        }
        tick() {
            this.sec++;
            return this.sec;
        }
    }

    const t = new Timer();

    R.line(lines, "Fix 1 — t.tick.bind(t)", runTicks(t.tick.bind(t)));

    R.line(lines, "Fix 2 — () => t.tick()", runTicks(function () {
        return t.tick();
    }));

    class TimerArrow {
        sec = 0;
        tick = () => {
            this.sec++;
            return this.sec;
        };
    }

    const ta = new TimerArrow();
    R.line(lines, "Fix 3 — class field arrow", runTicks(function () {
        return ta.tick();
    }));

    R.note(lines, "In browser: setInterval(t.tick.bind(t), 1000) logs 1, 2, 3...");

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function describe(role, city) {
        return this.name + " is a " + role + " from " + city;
    }

    const u = { name: "Aarav" };

    R.line(lines, 'describe.call(u, "engineer", "Jaipur")', describe.call(u, "engineer", "Jaipur"));
    R.line(lines, 'describe.apply(u, ["engineer", "Jaipur"])', describe.apply(u, ["engineer", "Jaipur"]));

    const dev = describe.bind(u, "developer");
    R.line(lines, 'dev("Mumbai")', dev("Mumbai"));

    R.note(lines, "call/apply run now with listed vs array args; bind returns a new function for later.");

    R.show("#task3Output", lines);

})();



// —— Bonus Task — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const team = {
        members: ["Priya", "Aarav", "Riya"],
        printRegular: function () {
            const logs = [];
            this.members.forEach(function (m) {
                try {
                    logs.push(this.members.length + " " + m);
                } catch (err) {
                    logs.push("BREAKS: " + err.name);
                }
            });
            return logs;
        },
        printArrow: function () {
            const logs = [];
            this.members.forEach((m) => {
                logs.push(this.members.length + " " + m);
            });
            return logs;
        }
    };

    R.line(lines, "printRegular() lines", JSON.stringify(team.printRegular()));
    R.line(lines, "printArrow() lines", JSON.stringify(team.printArrow()));

    R.note(lines, "Regular forEach callback: this is undefined — breaks. Arrow inherits team from printArrow.");

    R.show("#task4Output", lines);

})();
