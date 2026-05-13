(function () {
    const lines = [];
    lines.push("Task 1 — traffic light with switch");
    const light = "yellow";
    let action = "";
    switch (light) {
        case "green":
            action = "Go";
            break;
        case "yellow":
            action = "Slow";
            break;
        case "red":
            action = "Stop";
            break;
        default:
            action = "Unknown";
    }
    lines.push("Answer: light " + light + " → " + action);

    lines.push("");
    lines.push("Task 2 — pass/fail ternary");
    const score = 68;
    lines.push("Answer: score " + score + " → " + (score >= 60 ? "Pass" : "Fail"));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();