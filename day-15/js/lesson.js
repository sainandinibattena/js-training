(function () {

    const R = RefOutput;
    const lines = [];


    function readName(fn, ctx) {
        return fn.call(ctx);
    }

    R.section(lines, "Topic 1 — What is this?");
    R.line(lines, "whoAmI() plain call (strict)", (function () {
        "use strict";
        function whoAmI() {
            return typeof this === "undefined" ? "undefined" : String(this);
        }
        return whoAmI();
    })());
    R.line(lines, 'user.whoAmI() → this.name', (function () {
        "use strict";
        function whoAmI() {
            return this.name;
        }
        const user = { name: "Priya", whoAmI: whoAmI };
        return user.whoAmI();
    })());
    R.line(lines, 'other.whoAmI() → this.name', (function () {
        "use strict";
        function whoAmI() {
            return this.name;
        }
        const other = { name: "Aarav", whoAmI: whoAmI };
        return other.whoAmI();
    })());

    R.section(lines, "Topic 2 — Four binding rules");
    R.line(lines, "speak() default binding", (function () {
        "use strict";
        function speak() {
            return typeof this === "undefined" ? "undefined" : "global";
        }
        return speak();
    })());
    R.line(lines, "car.show() implicit", (function () {
        const car = {
            brand: "Tata",
            show: function () {
                return this.brand;
            }
        };
        return car.show();
    })());
    R.line(lines, "intro.call(u, Jaipur)", (function () {
        "use strict";
        function intro(city) {
            return this.name + " from " + city;
        }
        const u = { name: "Priya" };
        return intro.call(u, "Jaipur");
    })());
    R.line(lines, 'new User("Anaya").name', (function () {
        "use strict";
        function User(name) {
            this.name = name;
        }
        return new User("Anaya").name;
    })());

    R.section(lines, "Follow-along — lost this preview");
    R.line(lines, "obj.f()", (function () {
        "use strict";
        const obj = {
            n: 7,
            f: function () {
                return this.n;
            }
        };
        return obj.f();
    })());
    R.line(lines, "g() where g = obj.f", (function () {
        "use strict";
        const obj = {
            n: 7,
            f: function () {
                return this.n;
            }
        };
        const g = obj.f;
        try {
            return g();
        } catch (err) {
            return err.name + ": " + err.message;
        }
    })());

    R.section(lines, "Topic 3 — call / apply / bind");
    R.cases(lines, (function () {
        "use strict";
        function greet(city, lang) {
            return this.name + " from " + city + " speaks " + lang;
        }
        const u = { name: "Priya" };
        const bound = greet.bind(u, "Jaipur");
        return [
            { label: 'greet.call(u, "Jaipur", "Hindi")', value: greet.call(u, "Jaipur", "Hindi") },
            { label: 'greet.apply(u, ["Jaipur", "Hindi"])', value: greet.apply(u, ["Jaipur", "Hindi"]) },
            { label: 'greetPriya("English")', value: bound("English") },
            { label: 'greetPriya.call({name:"Aarav"},"Tamil")', value: bound.call({ name: "Aarav" }, "Tamil") }
        ];
    })());

    R.section(lines, "Topic 4 — Arrow vs regular method");
    R.line(lines, "user.regular()", (function () {
        "use strict";
        const user = {
            name: "Priya",
            regular: function () {
                return this.name;
            }
        };
        return user.regular();
    })());
    R.line(lines, "user.arrow() as method", (function () {
        "use strict";
        const user = {
            name: "Priya",
            arrow: () => {
                return typeof this === "undefined" ? "undefined" : (this.name || "(no name)");
            }
        };
        return user.arrow();
    })());
    R.line(lines, "team.greetAll() lines", (function () {
        "use strict";
        const team = {
            members: ["Priya", "Aarav", "Riya"],
            greetAll: function () {
                const out = [];
                this.members.forEach((m) => {
                    out.push("Hi " + m + ", from team " + this.members.length);
                });
                return out.join(" | ");
            }
        };
        return team.greetAll();
    })());

    R.section(lines, "Topic 5 — this in classes");
    R.line(lines, "a.greet()", (function () {
        "use strict";
        class User {
            constructor(name) {
                this.name = name;
            }
            greet() {
                return "Hi, I'm " + this.name;
            }
        }
        return new User("Priya").greet();
    })());
    R.line(lines, "b.greet()", (function () {
        "use strict";
        class User {
            constructor(name) {
                this.name = name;
            }
            greet() {
                return "Hi, I'm " + this.name;
            }
        }
        return new User("Aarav").greet();
    })());
    R.line(lines, "greetFn = a.greet; greetFn()", (function () {
        "use strict";
        class User {
            constructor(name) {
                this.name = name;
            }
            greet() {
                return this.name;
            }
        }
        const a = new User("Priya");
        const greetFn = a.greet;
        try {
            return greetFn();
        } catch (err) {
            return err.name + ": " + err.message;
        }
    })());

    R.section(lines, "Topic 6 — Lost this fixes (simulated ticks)");
    R.line(lines, "setTimeout(c.inc) without fix", "TypeError (this lost)");
    R.line(lines, "bind fix — 3 ticks", (function () {
        "use strict";
        class Counter {
            constructor() {
                this.count = 0;
            }
            inc() {
                this.count++;
                return this.count;
            }
        }
        const c = new Counter();
        const fn = c.inc.bind(c);
        return [fn(), fn(), fn()].join(", ");
    })());
    R.line(lines, "arrow wrapper — 3 ticks", (function () {
        "use strict";
        class Counter {
            constructor() {
                this.count = 0;
            }
            inc() {
                this.count++;
                return this.count;
            }
        }
        const c = new Counter();
        const run = function () {
            return c.inc();
        };
        return [run(), run(), run()].join(", ");
    })());

    R.section(lines, "Follow-along — arrow object method");
    R.line(lines, "obj.m() arrow method → this.n", (function () {
        const obj = {
            n: 10,
            m: () => {
                return typeof this === "undefined" || this.n === undefined
                    ? "undefined"
                    : this.n;
            }
        };
        return obj.m();
    })());

    R.show("#out", lines);

})();
