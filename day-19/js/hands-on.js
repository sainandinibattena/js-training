// —— Task 1 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    function fetchUser(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, name: "Priya" });
            }, 300);
        });
    }

    function fetchOrders(userId) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve([
                    { orderId: 101, userId: userId },
                    { orderId: 102, userId: userId }
                ]);
            }, 300);
        });
    }

    async function showOrders(id) {
        try {
            const user = await fetchUser(id);
            const orders = await fetchOrders(user.id);
            R.line(lines, "orders.length", orders.length);
            R.line(lines, "user used for fetchOrders", JSON.stringify(user));
        } catch (err) {
            R.error(lines, "catch", err);
        }
    }

    showOrders(7).then(function () {
        R.show("#task1Output", lines);
    });

})();



// —— Task 2 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    function fetchPrice(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, price: 100 });
            }, 500);
        });
    }

    async function slow() {
        const t0 = Date.now();
        await fetchPrice(1);
        await fetchPrice(2);
        await fetchPrice(3);
        return Date.now() - t0;
    }

    async function fast() {
        const t0 = Date.now();
        await Promise.all([
            fetchPrice(1),
            fetchPrice(2),
            fetchPrice(3)
        ]);
        return Date.now() - t0;
    }

    Promise.all([slow(), fast()]).then(function (times) {
        R.line(lines, "slow() elapsed (ms)", times[0]);
        R.line(lines, "fast() elapsed (ms)", times[1]);
        R.line(lines, "slow ≈ 1500ms?", times[0] >= 1400 && times[0] < 1700 ? "yes" : "check timing");
        R.line(lines, "fast ≈ 500ms?", times[1] >= 450 && times[1] < 700 ? "yes" : "check timing");

        R.show("#task2Output", lines);
    });

})();



// —— Task 3 — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];
    const ids = [1, 2, 3];

    function fetchPrice(id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ id: id, price: 100 });
            }, 500);
        });
    }

    R.line(lines, "forEach bug — log order", "start → end → (got logs later)");
    R.note(lines, "forEach does not await async callbacks; \"end\" runs immediately.");

    async function sequential() {
        const order = ["start"];
        for (const id of ids) {
            const p = await fetchPrice(id);
            order.push("got " + JSON.stringify(p));
        }
        order.push("end");
        return order.join(" → ");
    }

    async function parallel() {
        const order = ["start"];
        const results = await Promise.all(ids.map(function (id) {
            return fetchPrice(id);
        }));
        results.forEach(function (p) {
            order.push("got " + JSON.stringify(p));
        });
        order.push("end");
        return order.join(" → ");
    }

    sequential().then(function (seqLog) {
        R.line(lines, "for...of fix", seqLog);
        return parallel();
    }).then(function (parLog) {
        R.line(lines, "Promise.all + map fix", parLog);
        R.note(lines, "parallel: all fetches start together; \"end\" still after all \"got\".");

        R.show("#task3Output", lines);
    });

})();



// —— Task 4 (Bonus) — reference solution ——

(function () {

    const R = RefOutput;
    const lines = [];

    let flakyCalls = 0;

    async function flaky() {
        flakyCalls += 1;
        if (flakyCalls < 3) {
            throw new Error("fail attempt " + flakyCalls);
        }
        return "success on attempt " + flakyCalls;
    }

    async function retry(fn, attempts) {
        let lastError;
        for (let i = 0; i < attempts; i += 1) {
            try {
                return await fn();
            } catch (err) {
                lastError = err;
            }
        }
        throw lastError;
    }

    retry(flaky, 5).then(function (value) {
        R.line(lines, "retry(flaky, 5) result", value);
        R.line(lines, "attempts used", flakyCalls);
        R.show("#task4Output", lines);
    }).catch(function (err) {
        R.error(lines, "retry gave up", err);
        R.show("#task4Output", lines);
    });

})();
