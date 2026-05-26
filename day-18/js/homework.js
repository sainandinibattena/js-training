// Task 1

(function () {

    const R = RefOutput;
    const lines = [];

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    R.line(lines, "wait(500).then(() => wait(500)).then(() => console.log(\"1s\"))", "logs 1s after ~1000ms total");

    wait(500)
        .then(function () {
            return wait(500);
        })
        .then(function () {
            R.line(lines, "console.log after chain", "1s");
            R.show("#homeworkOut1", lines);
        });

})();



// Task 2

(function () {

    const R = RefOutput;
    const lines = [];

    function fetchData(id) {
        return new Promise(function (resolve, reject) {
            if (Math.random() < 0.5) {
                resolve({ id: id, data: "ok" });
            } else {
                reject(new Error("random fail for id " + id));
            }
        });
    }

  function runOnce(label, forceSuccess) {
        const originalRandom = Math.random;
        Math.random = function () {
            return forceSuccess ? 0.9 : 0.1;
        };

        return fetchData(1)
            .then(function (d1) {
                return fetchData(2).then(function (d2) {
                    return fetchData(3).then(function (d3) {
                        return { d1: d1, d2: d2, d3: d3 };
                    });
                });
            })
            .then(function (all) {
                Math.random = originalRandom;
                return label + " success → " + JSON.stringify(all);
            })
            .catch(function (err) {
                Math.random = originalRandom;
                return label + " catch → " + err.message;
            });
    }

    Promise.all([
        runOnce("run A", true),
        runOnce("run B", false)
    ]).then(function (outcomes) {
        R.line(lines, "example success path", outcomes[0]);
        R.line(lines, "example failure path", outcomes[1]);
        R.note(lines, "Run fetchData() yourself multiple times — outcome changes each run.");

        R.show("#homeworkOut2", lines);
    });

})();



// Task 3

(function () {

    const R = RefOutput;
    const lines = [];

    function wait(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function fetchUser(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, name: "Priya" });
            }, 3000);
        });
    }

    Promise.race([
        fetchUser(7),
        wait(2000).then(function () {
            return Promise.reject(new Error("timeout"));
        })
    ]).then(function (user) {
        R.line(lines, "race result (fetch finished first)", JSON.stringify(user));
        R.show("#homeworkOut3", lines);
    }).catch(function (err) {
        R.line(lines, "race result (timeout wins)", err.message);
        R.line(lines, "pattern", "Promise.race([job, timeoutReject])");
        R.note(lines, "fetchUser takes 3s; timeout fires at 2s — .catch runs with \"timeout\".");

        R.show("#homeworkOut3", lines);
    });

})();



// Task 4

(function () {

    const R = RefOutput;
    const lines = [];

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

    Promise.any([flaky1, flaky2, flaky3]).then(function (value) {
        R.line(lines, "Promise.any first success", value);
        R.note(lines, "Rejections are ignored until all promises reject.");

        R.show("#homeworkOut4", lines);
    });

})();
