// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const arr = [1, 2, 3];

    const p1 = Object.getPrototypeOf(arr);
    const p2 = Object.getPrototypeOf(p1);
    const p3 = Object.getPrototypeOf(p2);

    R.line(lines, "getPrototypeOf(arr)", p1 === Array.prototype ? "Array.prototype" : String(p1));
    R.line(lines, "getPrototypeOf(Array.prototype)", p2 === Object.prototype ? "Object.prototype" : String(p2));
    R.line(lines, "getPrototypeOf(Object.prototype)", p3 === null ? "null" : String(p3));
    R.note(lines, "Chain: arr → Array.prototype → Object.prototype → null");

    R.show("#task1Output", lines);

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const vehicle = {
        start: function () {
            return this.name + " starting";
        }
    };

    const car = Object.create(vehicle);
    car.name = "Tata Nexon";

    const bike = Object.create(vehicle);
    bike.name = "Royal Enfield";

    R.line(lines, "car.start()", car.start());
    R.line(lines, "bike.start()", bike.start());
    R.line(lines, 'car.hasOwnProperty("name")', car.hasOwnProperty("name"));
    R.line(lines, '"start" in car', "start" in car);
    R.line(lines, 'car.hasOwnProperty("start")', car.hasOwnProperty("start"));

    R.show("#task2Output", lines);

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function () {
        return "Hi, I'm " + this.name;
    };

    function Student(name, school) {
        Person.call(this, name);
        this.school = school;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.study = function () {
        return this.name + " studies at " + this.school;
    };

    const riya = new Student("Riya", "IIT Delhi");

    R.line(lines, "riya.greet()", riya.greet());
    R.line(lines, "riya.study()", riya.study());
    R.line(lines, "getPrototypeOf(riya) === Student.prototype", Object.getPrototypeOf(riya) === Student.prototype);

    R.show("#task3Output", lines);

})();



// —— Bonus Task — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];


    const dog = Object.create({ species: "Canis" });
    dog.name = "Bruno";

    R.line(lines, 'hasOwnProperty("name")', dog.hasOwnProperty("name"));
    R.line(lines, 'hasOwnProperty("species")', dog.hasOwnProperty("species"));
    R.line(lines, '"name" in dog', "name" in dog);
    R.line(lines, '"species" in dog', "species" in dog);
    R.line(lines, '"toString" in dog', "toString" in dog);
    R.note(lines, "hasOwnProperty = own props only. in = anywhere on the chain.");

    R.show("#task4Output", lines);

})();
