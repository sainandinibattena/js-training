(function () {

    const R = RefOutput;
    const lines = [];


    R.section(lines, "Topic 1 — Every object has a prototype");
    R.line(lines, "getPrototypeOf(user) === Object.prototype", (function () {
        const user = { name: "Priya" };
        return Object.getPrototypeOf(user) === Object.prototype;
    })());
    R.line(lines, "user.toString()", (function () {
        return { name: "Priya" }.toString();
    })());
    R.line(lines, "Object.prototype has toString", Object.prototype.hasOwnProperty("toString"));
    R.line(lines, "getPrototypeOf(Object.prototype)", Object.getPrototypeOf(Object.prototype));

    R.section(lines, "Topic 2 — Object.create");
    R.cases(lines, (function () {
        const animal = {
            eat: function () {
                return this.name + " is eating";
            },
            sleep: function () {
                return this.name + " is sleeping";
            }
        };
        const dog = Object.create(animal);
        dog.name = "Bruno";
        return [
            { label: "dog.eat()", value: dog.eat() },
            { label: "getPrototypeOf(dog) === animal", value: Object.getPrototypeOf(dog) === animal },
            { label: 'hasOwnProperty("name")', value: dog.hasOwnProperty("name") },
            { label: 'hasOwnProperty("eat")', value: dog.hasOwnProperty("eat") }
        ];
    })());
    R.cases(lines, (function () {
        const a = { x: 1 };
        const b = Object.create(a);
        b.y = 2;
        return [
            { label: "b.x (inherited)", value: b.x },
            { label: "b.y (own)", value: b.y },
            { label: 'b.hasOwnProperty("x")', value: b.hasOwnProperty("x") }
        ];
    })());

    R.section(lines, "Topic 3 — Prototype chain lookup");
    R.cases(lines, (function () {
        const grandparent = { lastName: "Sharma" };
        const parent = Object.create(grandparent);
        parent.firstName = "Priya";
        const child = Object.create(parent);
        child.age = 5;
        child.firstName = "Anaya";
        return [
            { label: "child.age", value: child.age },
            { label: "child.lastName", value: child.lastName },
            { label: "child.firstName (own shadows parent)", value: child.firstName },
            { label: "parent.firstName (unchanged)", value: parent.firstName }
        ];
    })());

    R.section(lines, "Topic 4 — hasOwnProperty vs in");
    R.cases(lines, (function () {
        const animal = { eat: function () {} };
        const dog = Object.create(animal);
        dog.bark = function () {
            return "woof";
        };
        return [
            { label: 'hasOwnProperty("bark")', value: dog.hasOwnProperty("bark") },
            { label: 'hasOwnProperty("eat")', value: dog.hasOwnProperty("eat") },
            { label: '"eat" in dog', value: "eat" in dog },
            { label: '"toString" in dog', value: "toString" in dog }
        ];
    })());

    R.section(lines, "Topic 5 — Constructor inheritance");
    R.cases(lines, (function () {
        function User(name, city) {
            this.name = name;
            this.city = city;
        }
        User.prototype.greet = function () {
            return "Hi, I'm " + this.name + " from " + this.city;
        };
        const a = new User("Priya", "Jaipur");
        const b = new User("Aarav", "Mumbai");
        return [
            { label: "a.greet()", value: a.greet() },
            { label: "a.greet === b.greet", value: a.greet === b.greet },
            { label: "getPrototypeOf(a) === User.prototype", value: Object.getPrototypeOf(a) === User.prototype }
        ];
    })());
    R.cases(lines, (function () {
        function User(name, city) {
            this.name = name;
            this.city = city;
        }
        User.prototype.greet = function () {
            return "Hi, I'm " + this.name;
        };
        function Admin(name, city, level) {
            User.call(this, name, city);
            this.level = level;
        }
        Admin.prototype = Object.create(User.prototype);
        Admin.prototype.constructor = Admin;
        Admin.prototype.power = function () {
            return this.name + " has level " + this.level;
        };
        const ad = new Admin("Riya", "Bangalore", 5);
        return [
            { label: "ad.greet()", value: ad.greet() },
            { label: "ad.power()", value: ad.power() }
        ];
    })());

    R.section(lines, "Topic 6 — Safer than patching Array.prototype");
    R.line(lines, "last(fruits) utility", (function () {
        function last(arr) {
            return arr[arr.length - 1];
        }
        return last(["apple", "mango", "banana"]);
    })());

    R.show("#out", lines);

})();
