(function () {

    const R = RefOutput;
    const lines = [];


    R.section(lines, "Topic 1 — Class syntax basics");
    R.cases(lines, (function () {
        class User {
            constructor(name, city) {
                this.name = name;
                this.city = city;
            }
            greet() {
                return "Hi, I'm " + this.name + " from " + this.city;
            }
        }
        const a = new User("Priya", "Jaipur");
        const b = new User("Aarav", "Mumbai");
        return [
            { label: "a.greet()", value: a.greet() },
            { label: "typeof User", value: typeof User },
            { label: "a.greet === b.greet", value: a.greet === b.greet },
            { label: "getPrototypeOf(a) === User.prototype", value: Object.getPrototypeOf(a) === User.prototype }
        ];
    })());

    R.section(lines, "Topic 2 — Getters and setters");
    R.cases(lines, (function () {
        class Product {
            constructor(name, priceInPaise) {
                this.name = name;
                this._priceInPaise = priceInPaise;
            }
            get priceInRupees() {
                return this._priceInPaise / 100;
            }
            set priceInRupees(rupees) {
                if (rupees < 0) {
                    throw new Error("Price cannot be negative");
                }
                this._priceInPaise = rupees * 100;
            }
            get priceWithGST() {
                return this.priceInRupees * 1.18;
            }
        }
        const p = new Product("Notebook", 5000);
        p.priceInRupees = 100;
        return [
            { label: "p.priceInRupees (after setter)", value: p.priceInRupees },
            { label: "p.priceWithGST", value: p.priceWithGST }
        ];
    })());
    R.line(lines, "T(100).f getter (°F)", (function () {
        class T {
            constructor(c) {
                this._c = c;
            }
            get f() {
                return this._c * 9 / 5 + 32;
            }
        }
        return new T(100).f;
    })());

    R.section(lines, "Topic 3 — extends and super");
    R.cases(lines, (function () {
        class Animal {
            constructor(name) {
                this.name = name;
            }
            speak() {
                return this.name + " makes a sound";
            }
        }
        class Dog extends Animal {
            constructor(name, breed) {
                super(name);
                this.breed = breed;
            }
            speak() {
                return super.speak() + " | " + this.name + " barks!";
            }
        }
        const d = new Dog("Bruno", "Labrador");
        return [
            { label: "d.speak()", value: d.speak() },
            { label: "d instanceof Dog", value: d instanceof Dog },
            { label: "d instanceof Animal", value: d instanceof Animal }
        ];
    })());

    R.section(lines, "Topic 4 — static methods");
    R.cases(lines, (function () {
        class MathUtils {
            static gst(amount, rate) {
                return amount * (rate / 100);
            }
            static format(amount) {
                return "₹" + amount.toFixed(2);
            }
        }
        class User {
            constructor(name) {
                this.name = name;
            }
            static fromEmail(email) {
                return new User(email.split("@")[0]);
            }
        }
        return [
            { label: "MathUtils.gst(1000)", value: MathUtils.gst(1000) },
            { label: "MathUtils.format(1180)", value: MathUtils.format(1180) },
            { label: "User.fromEmail(...).name", value: User.fromEmail("priya@example.com").name }
        ];
    })());

    R.section(lines, "Topic 5 — Private fields #");
    R.line(lines, "BankAccount balance after ops", (function () {
        class BankAccount {
            #balance;
            #transactions = [];
            constructor(initial) {
                this.#balance = initial;
            }
            deposit(amt) {
                this.#balance += amt;
                this.#transactions.push({ type: "deposit", amt: amt });
            }
            withdraw(amt) {
                if (amt > this.#balance) {
                    throw new Error("Insufficient funds");
                }
                this.#balance -= amt;
                this.#transactions.push({ type: "withdraw", amt: amt });
            }
            get balance() {
                return this.#balance;
            }
            get historyLength() {
                return this.#transactions.length;
            }
        }
        const acc = new BankAccount(1000);
        acc.deposit(500);
        acc.withdraw(200);
        return acc.balance;
    })());

    R.section(lines, "Topic 6 — Custom error classes");
    R.line(lines, "validateAge(-5) catch", (function () {
        class AppError extends Error {
            constructor(message, code) {
                super(message);
                this.name = this.constructor.name;
                this.code = code;
            }
        }
        class ValidationError extends AppError {
            constructor(field, message) {
                super(message, "VALIDATION_FAILED");
                this.field = field;
            }
        }
        function validateAge(age) {
            if (age < 0) {
                throw new ValidationError("age", "Must be non-negative");
            }
        }
        try {
            validateAge(-5);
            return "(no error)";
        } catch (e) {
            return "[" + e.code + "] " + e.field + ": " + e.message;
        }
    })());

    R.section(lines, "Topic 7 — Classes are sugar");
    R.line(lines, "class Person vs function Person", "Same prototype chain, typeof === \"function\"");

    R.show("#out", lines);

})();
