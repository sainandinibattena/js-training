// Task 1

(function () {

    const R = RefOutput;
    const lines = [];


    const tool = {
        use: function () {
            return this.label + " in use";
        }
    };

    const vehicle = Object.create(tool);
    vehicle.drive = function () {
        return this.label + " driving";
    };

    const car = Object.create(vehicle);
    car.label = "car";
    car.park = function () {
        return this.label + " parked";
    };

    R.line(lines, "car.use()", car.use());
    R.line(lines, "car.drive()", car.drive());
    R.line(lines, "car.park()", car.park());
    R.line(lines, "getPrototypeOf(car) === vehicle", Object.getPrototypeOf(car) === vehicle);
    R.line(lines, "getPrototypeOf(vehicle) === tool", Object.getPrototypeOf(vehicle) === tool);

    R.show("#homeworkOut1", lines);

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];


    function Shape(name) {
        this.name = name;
    }

    Shape.prototype.describe = function () {
        return "Shape: " + this.name;
    };

    function Circle(name, radius) {
        Shape.call(this, name);
        this.radius = radius;
    }

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };

    const c1 = new Circle("C1", 5);

    R.line(lines, "c1.describe()", c1.describe());
    R.line(lines, "c1.area() rounded", c1.area().toFixed(2));
    R.line(lines, "c1 instanceof Circle", c1 instanceof Circle);
    R.line(lines, "c1 instanceof Shape", c1 instanceof Shape);

    R.show("#homeworkOut2", lines);

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];


    const sampleMethods = ["trim", "padStart", "repeat", "includes", "slice"];

    R.line(lines, "String.prototype sample methods", JSON.stringify(sampleMethods));
    R.line(lines, ' "  hi  ".trim()', "  hi  ".trim());
    R.line(lines, ' "go".padStart(5, "*")', "go".padStart(5, "*"));
    R.note(lines, "Example: trim() removes whitespace — inherited from String.prototype.");

    R.show("#homeworkOut3", lines);

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];


    function chainOf(obj) {
        const chain = [];
        let proto = Object.getPrototypeOf(obj);

        while (proto !== null) {
            chain.push(proto);
            proto = Object.getPrototypeOf(proto);
        }

        return chain;
    }

    const user = { name: "Priya" };
    const chain = chainOf(user);

    R.line(lines, "chainOf(user).length", chain.length);
    R.line(lines, "chain[0] === Object.prototype", chain[0] === Object.prototype);
    R.line(lines, "chain labels", chain.map(function (p) {
        if (p === Object.prototype) {
            return "Object.prototype";
        }
        if (p === Array.prototype) {
            return "Array.prototype";
        }
        return "prototype object";
    }).join(" → "));

    const arrChain = chainOf([1, 2]);
    R.line(lines, "chainOf([1,2]) labels", arrChain.map(function (p) {
        if (p === Array.prototype) {
            return "Array.prototype";
        }
        if (p === Object.prototype) {
            return "Object.prototype";
        }
        return "prototype";
    }).join(" → "));

    R.show("#homeworkOut4", lines);

})();
