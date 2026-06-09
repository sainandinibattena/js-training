// —— Task 1 — createEmitter

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 1 · createEmitter — reference");
    lines.push("function createEmitter() {");
    lines.push("  const listeners = new Map(); // event → Set<callback>");
    lines.push("  return { on, off, emit };");
    lines.push("}");
    R.blank(lines);

    function createEmitter() {
        const listeners = new Map();

        function on(event, callback) {
            if (!listeners.has(event)) {
                listeners.set(event, new Set());
            }
            listeners.get(event).add(callback);
        }

        function off(event, callback) {
            const set = listeners.get(event);
            if (set) {
                set.delete(callback);
            }
        }

        function emit(event) {
            const args = Array.prototype.slice.call(arguments, 1);
            const set = listeners.get(event);
            if (set) {
                set.forEach(function (cb) {
                    cb.apply(null, args);
                });
            }
        }

        return { on: on, off: off, emit: emit };
    }

    const bus = createEmitter();
    const log = [];

    const a = function () {
        log.push("A");
    };

    const b = function () {
        log.push("B");
    };

    bus.on("hello", a);
    bus.on("hello", b);
    bus.emit("hello");
    R.section(lines, "Results");
    R.line(lines, "first emit · log (A then B)", log.join(","));

    bus.off("hello", a);
    bus.emit("hello");
    R.line(lines, "second emit · log (append B only)", log.join(","));

    R.show("#task1Output", lines);

})();



// —— Task 2 — createUser factory

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 2 · factory — reference");
    lines.push("function createUser(name, role = \"user\") {");
    lines.push("  return {");
    lines.push("    name, role,");
    lines.push("    canEdit() { return this.role === \"admin\"; },");
    lines.push("    greet() { return `Hi, I'm ${this.name} (${this.role})`; }");
    lines.push("  };");
    lines.push("}");
    R.blank(lines);

    function createUser(name, role) {
        const r = role === undefined ? "user" : role;
        return {
            name: name,
            role: r,
            canEdit: function () {
                return r === "admin";
            },
            greet: function () {
                return "Hi, I'm " + this.name + " (" + this.role + ")";
            }
        };
    }

    const u1 = createUser("Priya");
    const u2 = createUser("Aarav", "admin");

    R.section(lines, "Results");
    R.line(lines, "u1.greet()", u1.greet());
    R.line(lines, "u1.canEdit()", u1.canEdit());
    R.line(lines, "u2.canEdit()", u2.canEdit());

    R.show("#task2Output", lines);

})();



// —— Task 3 — createCache + shared ref

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Task 3 · cache factory — reference");
    lines.push("function createCache() {");
    lines.push("  const store = new Map();");
    lines.push("  return { get, set, has, get size() { return store.size; } };");
    lines.push("}");
    lines.push("// Each call → new Map. Same variable twice → shared store.");
    R.blank(lines);

    function createCache() {
        const store = new Map();
        return {
            get: function (k) {
                return store.get(k);
            },
            set: function (k, v) {
                store.set(k, v);
            },
            has: function (k) {
                return store.has(k);
            },
            get size() {
                return store.size;
            }
        };
    }

    const c1 = createCache();
    const c2 = createCache();
    c1.set("x", 1);
    c2.set("y", 2);

    R.section(lines, "Independent instances");
    R.line(lines, "c1.size · c2.size", String(c1.size) + " | " + String(c2.size));

    const shared = createCache();
    const refA = shared;
    const refB = shared;
    refA.set("k", 99);

    R.section(lines, "Shared reference");
    R.line(lines, "refB.get(\"k\") after refA.set", refB.get("k"));
    R.line(lines, "refA === refB", refA === refB);

    R.show("#task3Output", lines);

})();



// —— Bonus — reactive Proxy

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Bonus · reactive Proxy — reference");
    lines.push("function reactive(obj, onChange) {");
    lines.push("  return new Proxy(obj, {");
    lines.push("    set(target, prop, value) {");
    lines.push("      target[prop] = value;");
    lines.push("      onChange(String(prop), value);");
    lines.push("      return true;");
    lines.push("    }");
    lines.push("  });");
    lines.push("}");
    R.blank(lines);

    function reactive(obj, onChange) {
        return new Proxy(obj, {
            set: function (target, prop, value) {
                target[prop] = value;
                onChange(String(prop), value);
                return true;
            }
        });
    }

    const changes = [];

    const state = reactive({ count: 0 }, function (key, val) {
        changes.push(key + "→" + val);
    });

    state.count = 1;
    state.count = 5;
    state.extra = "new";

    R.section(lines, "Results");
    R.line(lines, "onChange log", changes.join(" | "));
    R.line(lines, "state.count", state.count);

    R.show("#task4Output", lines);

})();
