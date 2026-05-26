// Task 1

(function () {

    const R = RefOutput;
    const lines = [];


    class Vehicle {
        constructor(brand) {
            this.brand = brand;
        }
        start() {
            return this.brand + " starting";
        }
    }

    class Car extends Vehicle {
        constructor(brand, doors) {
            super(brand);
            this.doors = doors;
        }
        start() {
            return super.start() + "\nCar-specific check";
        }
    }

    class Bike extends Vehicle {
        constructor(brand) {
            super(brand);
        }
    }

    const car = new Car("Tata", 4);
    const bike = new Bike("Royal Enfield");

    R.line(lines, "car.start()", car.start());
    R.line(lines, "bike.start()", bike.start());
    R.line(lines, "car instanceof Vehicle", car instanceof Vehicle);

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];


    class Counter {
        static count = 0;
        #value = 0;
        constructor() {
            Counter.count++;
        }
        inc() {
            this.#value++;
        }
        get value() {
            return this.#value;
        }
    }

    const a = new Counter();
    const b = new Counter();
    const c = new Counter();

    R.line(lines, "Counter.count after 3 new", Counter.count);
    R.line(lines, "a.value after a.inc()", (a.inc(), a.value));

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];


    class Temperature {
        #celsius = 0;
        get celsius() {
            return this.#celsius;
        }
        set celsius(value) {
            if (value < -273.15) {
                throw new Error("Below absolute zero");
            }
            this.#celsius = value;
        }
        get fahrenheit() {
            return this.#celsius * 9 / 5 + 32;
        }
    }

    const t = new Temperature();
    t.celsius = 100;

    R.line(lines, "t.celsius", t.celsius);
    R.line(lines, "t.fahrenheit", t.fahrenheit);

    try {
        t.celsius = -300;
        R.line(lines, "invalid set", "allowed");
    } catch (err) {
        R.error(lines, "t.celsius = -300", err);
    }

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];


    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function parseUser(json) {
        let data;
        try {
            data = JSON.parse(json);
        } catch (err) {
            throw new ValidationError("Invalid JSON: " + err.message);
        }
        if (!data.name) {
            throw new ValidationError("Missing name field");
        }
        return data;
    }

    try {
        parseUser("{bad");
    } catch (e) {
        R.line(lines, "invalid JSON — instanceof ValidationError", e instanceof ValidationError);
        R.line(lines, "invalid JSON — message", e.message);
    }

    try {
        parseUser('{"age":20}');
    } catch (e) {
        R.line(lines, "missing name — instanceof ValidationError", e instanceof ValidationError);
        R.line(lines, "missing name — message", e.message);
    }

    R.line(lines, "valid parse", JSON.stringify(parseUser('{"name":"Priya","age":20}')));

    R.show("#homeworkOut4", lines);

})();
