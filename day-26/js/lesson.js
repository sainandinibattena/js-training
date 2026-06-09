(function () {

    const R = RefOutput;
    const lines = [];

    R.section(lines, "Topic 2 · IIFE module pattern");
    lines.push("const counter = (function () {");
    lines.push("  let count = 0;");
    lines.push("  return { inc() { count++; }, get() { return count; } };");
    lines.push("})();");
    R.line(lines, "IIFE module · counter.get()", 2);
    R.line(lines, "counter.count from outside", "undefined");
    R.blank(lines);

    R.section(lines, "Topic 3 · Event emitter");
    lines.push("on(event, fn)  off(event, fn)  emit(event, ...args)");
    R.line(lines, "emit user:signup · listener count", 2);
    R.line(lines, "follow-along · 2nd emit after off", "b only");
    R.blank(lines);

    R.section(lines, "Topic 4 · Factory");
    lines.push("function createUser(name, role) { return { greet() {...} }; }");
    R.line(lines, "vehicleFactory", "car | bike");
    R.line(lines, "createUser greet", "Hi, I'm Priya (user)");
    R.blank(lines);

    R.section(lines, "Topic 5 · Singleton");
    lines.push("// one shared instance (module default or closure)");
    R.line(lines, "Logger a === b", true);
    R.blank(lines);

    R.section(lines, "Topic 6 · Proxy");
    lines.push("new Proxy(target, { get, set, ... })");
    R.line(lines, "unknown key trap", "?? unknown: unknown");
    R.line(lines, "reactive set count", "notified");

    R.show("#out", lines);

})();
