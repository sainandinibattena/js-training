// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.height;
        }
        scale(factor) {
            this.width *= factor;
            this.height *= factor;
        }
    }

    const rect = new Rectangle(2, 3);

    R.line(lines, "area before scale", rect.area);
    rect.scale(2);
    R.line(lines, "area after scale(2)", rect.area);
    R.line(lines, "width × height", rect.width + " × " + rect.height);

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    class Employee {
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
        describe() {
            return this.name + " earns ₹" + this.salary + "/month";
        }
    }

    class Manager extends Employee {
        constructor(name, salary, team) {
            super(name, salary);
            this.team = team;
        }
        describe() {
            return super.describe() + "\nLeads team of " + this.team.length;
        }
    }

    const riya = new Manager("Riya", 80000, ["Priya", "Aarav", "Anaya"]);

    R.line(lines, "riya.describe()", riya.describe());

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    class Counter {
        #count = 0;
        inc() {
            this.#count++;
        }
        dec() {
            if (this.#count <= 0) {
                throw new Error("Count cannot go negative");
            }
            this.#count--;
        }
        get value() {
            return this.#count;
        }
    }

    const c = new Counter();
    c.inc();
    c.inc();
    c.inc();
    c.dec();

    R.line(lines, "value after 3 inc, 1 dec", c.value);

    try {
        c.dec();
        c.dec();
        c.dec();
        c.dec();
        R.line(lines, "extra dec calls", "no error");
    } catch (err) {
        R.error(lines, "dec() four more times", err);
    }

    R.show("#task3Output", lines);

})();



// —— Bonus Task — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    class ValidationError extends Error {
        constructor(field, message) {
            super(message);
            this.name = "ValidationError";
            this.field = field;
        }
    }

    function validateUser(user) {
        if (!user.name) {
            throw new ValidationError("name", "Name is required");
        }
        if (user.age < 0) {
            throw new ValidationError("age", "Age must be non-negative");
        }
    }

    try {
        validateUser({ age: 25 });
    } catch (e) {
        R.line(lines, "bad name — field", e.field);
        R.line(lines, "bad name — message", e.message);
    }

    try {
        validateUser({ name: "Priya", age: -1 });
    } catch (e) {
        R.line(lines, "bad age — field", e.field);
        R.line(lines, "bad age — message", e.message);
    }

    R.show("#task4Output", lines);

})();
