// —— Practice task 1 — emitter with once

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW1 · once — reference");
    lines.push("function once(event, cb) {");
    lines.push("  function wrapped(...args) {");
    lines.push("    cb(...args);");
    lines.push("    off(event, wrapped);");
    lines.push("  }");
    lines.push("  on(event, wrapped);");
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

        function once(event, callback) {
            function wrapped() {
                callback.apply(null, arguments);
                off(event, wrapped);
            }
            on(event, wrapped);
        }

        return { on: on, off: off, emit: emit, once: once };
    }

    const bus = createEmitter();
    const hits = [];

    bus.once("tick", function () {
        hits.push("once");
    });

    bus.on("tick", function () {
        hits.push("normal");
    });

    bus.emit("tick");
    bus.emit("tick");

    R.section(lines, "Results");
    R.line(lines, "emit order on first tick", "once runs, then normal (Set iteration order)");
    R.line(lines, "after 2 emits · hits joined", hits.join(","));
    R.note(lines, "Second emit: once-handler removed → only normal runs.");

    R.show("#homeworkOut1", lines);

})();



// —— Practice task 2 — TTL cache

(function () {

    const R = RefOutput;

    const lines = [];

    R.section(lines, "HW2 · TTL cache — reference");
    lines.push("set(key, value, ttlMs) {");
    lines.push("  store.set(key, { value, expiresAt: Date.now() + ttlMs });");
    lines.push("}");
    lines.push("get(key) { /* delete + return undefined if expired */ }");
    R.blank(lines);

    function cacheFactory() {
        const store = new Map();

        return {
            set: function (key, value, ttlMs) {
                store.set(key, {
                    value: value,
                    expiresAt: Date.now() + ttlMs
                });
            },
            get: function (key) {
                const entry = store.get(key);
                if (!entry) {
                    return undefined;
                }
                if (Date.now() > entry.expiresAt) {
                    store.delete(key);
                    return undefined;
                }
                return entry.value;
            }
        };
    }

    const cache = cacheFactory();
    cache.set("a", 1, 60 * 60 * 1000);
    R.section(lines, "Long TTL");
    R.line(lines, "get(\"a\") fresh", cache.get("a"));

    const short = cacheFactory();
    short.set("x", 42, 15);

    R.section(lines, "Short TTL (async check)");
    R.line(lines, "get(\"x\") before wait", short.get("x"));

    setTimeout(function () {
        R.line(lines, "get(\"x\") after ~25ms (expired)", short.get("x"));
        R.show("#homeworkOut2", lines);
    }, 25);

})();



// —— Practice task 3 — Proxy logging on array-like object

(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "HW3 · Proxy traps — reference");
    lines.push("new Proxy(target, {");
    lines.push("  get(obj, prop) { /* log */ return obj[prop]; },");
    lines.push("  set(obj, prop, value) { /* log */ obj[prop] = value; return true; },");
    lines.push("  deleteProperty(obj, prop) { /* log */ delete obj[prop]; return true; }");
    lines.push("});");
    R.blank(lines);

    const log = [];

    const target = [10, 20, 30];

    const arr = new Proxy(target, {
        get: function (obj, prop) {
            log.push("get:" + String(prop));
            return obj[prop];
        },
        set: function (obj, prop, value) {
            log.push("set:" + String(prop) + "=" + value);
            obj[prop] = value;
            return true;
        },
        deleteProperty: function (obj, prop) {
            log.push("delete:" + String(prop));
            delete obj[prop];
            return true;
        }
    });

    R.section(lines, "Operations");
    lines.push("const v = arr[1];   // get \"1\"");
    lines.push("arr[1] = 99;       // set \"1\"");
    lines.push("delete arr[2];     // delete \"2\"");
    R.blank(lines);

    const v = arr[1];
    arr[1] = 99;
    delete arr[2];

    R.section(lines, "Results");
    R.line(lines, "arr[1] read (before set)", v);
    R.line(lines, "trap log joined", log.join(" | "));

    R.show("#homeworkOut3", lines);

})();
