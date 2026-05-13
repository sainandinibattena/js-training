// Task 1

function getGrade(marks) {

    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    }

    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }

    return "F";
}

const lines1 = [];

lines1.push(`72 → ${getGrade(72)}`);
lines1.push(`95 → ${getGrade(95)}`);
lines1.push(`50 → ${getGrade(50)}`);
lines1.push(`75 → ${getGrade(75)}`);
lines1.push(`120 → ${getGrade(120)}`);

document.querySelector("#task1Output").textContent =
    lines1.join("\n");




// Task 2

function getDayType(day) {

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";

        case "Saturday":
        case "Sunday":
            return "Weekend";

        default:
            return "Invalid day";
    }
}

const lines2 = [];

lines2.push(`Monday → ${getDayType("Monday")}`);
lines2.push(`Saturday → ${getDayType("Saturday")}`);
lines2.push(`Holiday → ${getDayType("Holiday")}`);

document.querySelector("#task2Output").textContent =
    lines2.join("\n");




// Task 3

const values = [
    0,
    "0",
    "",
    " ",
    null,
    undefined,
    NaN,
    [],
    {},
    "false"
];

const lines3 = [];

for (const value of values) {

    const result =
        value ? "truthy" : "falsy";

    lines3.push(
        `${JSON.stringify(value)} → ${result}`
    );
}

document.querySelector("#task3Output").textContent =
    lines3.join("\n");




// Bonus

function canComment(user) {

    if (!user) {
        return "No user";
    }

    if (user.isBanned) {
        return "User is banned";
    }

    if (user.age < 13) {
        return "Too young";
    }

    return "Comment allowed";
}

const validUser = {
    name: "Aarav",
    age: 20,
    isBanned: false
};

const bannedUser = {
    name: "Riya",
    age: 25,
    isBanned: true
};

const lines4 = [];

lines4.push(canComment(validUser));
lines4.push(canComment(bannedUser));
lines4.push(canComment(null));

document.querySelector("#task4Output").textContent =
    lines4.join("\n");