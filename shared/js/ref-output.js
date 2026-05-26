/**
 * Reference output helpers — Day 14 onward (Day 13 keeps its own style).
 */
(function (global) {

    function formatValue(value) {
        if (value === undefined) {
            return "undefined";
        }
        if (value === null) {
            return "null";
        }
        if (typeof value === "object") {
            return JSON.stringify(value);
        }
        return String(value);
    }

    function line(lines, label, value) {
        lines.push(label + " → " + formatValue(value));
    }

    function section(lines, title) {
        lines.push("");
        lines.push("—— " + title + " ——");
    }

    function blank(lines) {
        lines.push("");
    }

    function note(lines, text) {
        lines.push("");
        lines.push(text);
    }

    function error(lines, label, err) {
        lines.push(label + " → " + err.name + ": " + err.message);
    }

    function cases(lines, pairs) {
        pairs.forEach(function (pair) {
            line(lines, pair.label, pair.value);
        });
    }

    function show(selector, lines) {
        var el = document.querySelector(selector);
        if (el) {
            el.textContent = lines.join("\n");
        }
    }

    global.RefOutput = {
        line: line,
        section: section,
        blank: blank,
        note: note,
        error: error,
        cases: cases,
        show: show,
        format: formatValue
    };

})(typeof window !== "undefined" ? window : globalThis);
