// Task 1 — Day 18 chains rewritten with async/await

(function () {

    const R = RefOutput;
    const lines = [];

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    async function waitChain() {
        await wait(500);
        await wait(500);
        return "1s";
    }

    function fetchData(id) {
        return new Promise(function (resolve, reject) {
            if (Math.random() < 0.5) {
                resolve({ id: id, data: "ok" });
            } else {
                reject(new Error("random fail for id " + id));
            }
        });
    }

    async function fetchDataChain(forceSuccess) {
        const originalRandom = Math.random;
        Math.random = function () {
            return forceSuccess ? 0.9 : 0.1;
        };
        try {
            const d1 = await fetchData(1);
            const d2 = await fetchData(2);
            const d3 = await fetchData(3);
            return "success → " + JSON.stringify({ d1: d1, d2: d2, d3: d3 });
        } catch (err) {
            return "catch → " + err.message;
        } finally {
            Math.random = originalRandom;
        }
    }

    function fetchUser(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, name: "Priya" });
            }, 3000);
        });
    }

    async function raceWithTimeout() {
        try {
            const user = await Promise.race([
                fetchUser(7),
                wait(2000).then(function () {
                    return Promise.reject(new Error("timeout"));
                })
            ]);
            return "race success → " + JSON.stringify(user);
        } catch (err) {
            return "race catch → " + err.message;
        }
    }

    async function anyFlaky() {
        const flaky1 = new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error("flaky 1 down"));
            }, 100);
        });
        const flaky2 = new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error("flaky 2 down"));
            }, 200);
        });
        const flaky3 = new Promise(function (resolve) {
            setTimeout(function () {
                resolve("success from flaky 3");
            }, 300);
        });
        const value = await Promise.any([flaky1, flaky2, flaky3]);
        return "Promise.any → " + value;
    }

    Promise.all([
        waitChain(),
        fetchDataChain(true),
        fetchDataChain(false),
        raceWithTimeout(),
        anyFlaky()
    ]).then(function (results) {
        R.line(lines, "wait chain (async)", results[0]);
        R.line(lines, "fetchData success path", results[1]);
        R.line(lines, "fetchData failure path", results[2]);
        R.line(lines, "Promise.race timeout", results[3]);
        R.line(lines, "Promise.any first success", results[4]);

        R.show("#homeworkOut1", lines);
    });

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];
    const ids = [1, 2, 3, 4];

    function fetchUser(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, name: "User" + id });
            }, 400);
        });
    }

    async function fetchAllUsersSequential(userIds) {
        const users = [];
        for (const id of userIds) {
            users.push(await fetchUser(id));
        }
        return users;
    }

    async function fetchAllUsers(userIds) {
        return Promise.all(userIds.map(function (id) {
            return fetchUser(id);
        }));
    }

    (async function () {
        const t0 = Date.now();
        const seq = await fetchAllUsersSequential(ids);
        const seqMs = Date.now() - t0;

        const t1 = Date.now();
        const par = await fetchAllUsers(ids);
        const parMs = Date.now() - t1;

        R.line(lines, "sequential users", JSON.stringify(seq));
        R.line(lines, "sequential time (ms)", seqMs);
        R.line(lines, "parallel users", JSON.stringify(par));
        R.line(lines, "parallel time (ms)", parMs);
        R.line(lines, "parallel faster?", parMs < seqMs ? "yes" : "check timing");

        R.show("#homeworkOut2", lines);
    })();

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];

    function withTimeout(promise, ms) {
        return Promise.race([
            promise,
            new Promise(function (_, reject) {
                setTimeout(function () {
                    reject(new Error("timeout"));
                }, ms);
            })
        ]);
    }

    function slowJob() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("done");
            }, 3000);
        });
    }

    (async function () {
        try {
            const fast = await withTimeout(Promise.resolve("ok"), 1000);
            R.line(lines, "fast job", fast);
        } catch (err) {
            R.error(lines, "fast job", err);
        }

        try {
            await withTimeout(slowJob(), 1000);
            R.line(lines, "slow job", "unexpected success");
        } catch (err) {
            R.line(lines, "slow job rejected", err.message);
        }

        R.show("#homeworkOut3", lines);
    })();

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    (async function () {
        const delays = [300, 100, 200];
        const finishOrder = [];

        for (const ms of delays) {
            await wait(ms);
            finishOrder.push(ms);
            R.line(lines, "finished after " + ms + "ms", "logged");
        }

        R.line(lines, "finish order (ms)", finishOrder.join(", "));
        R.line(lines, "matches input order?", finishOrder.join() === delays.join() ? "yes" : "no");

        R.show("#homeworkOut4", lines);
    })();

})();
