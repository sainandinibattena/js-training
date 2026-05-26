// Task 1 — three predict-the-output snippets

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "snippet 1 (1,4,3,2)", "1, 4, 3, 2");
    R.line(lines, "snippet 2 (A,F,C,E,D,B)", "A, F, C, E, D, B");
    R.line(lines, "snippet 3 (X,W,Y,Z)", "X, W, Y, Z");

    R.show("#homeworkOut1", lines);

})();



// Task 2 — latentflip loupe snippet

(function () {

    const R = RefOutput;
    const lines = [];

    R.line(lines, "code pasted in loupe", 'console.log("1"); setTimeout(() => console.log("2"), 0); console.log("3");');
    R.line(lines, "output order", "1, 3, 2");
    R.line(lines, "sync first", "1, 3");
    R.line(lines, "macrotask after stack empty", "2");
    R.note(lines, "Open https://latentflip.com/loupe/ and step through to see stack vs Web APIs vs queues.");

    R.show("#homeworkOut2", lines);

})();



// Task 3 — chunk helper

(function () {

    const R = RefOutput;
    const lines = [];

    function chunk(array, fn, chunkSize) {
        return new Promise(function (resolve, reject) {
            let index = 0;
            const results = [];

            function runChunk() {
                const end = Math.min(index + chunkSize, array.length);
                try {
                    for (; index < end; index += 1) {
                        results.push(fn(array[index], index));
                    }
                } catch (err) {
                    reject(err);
                    return;
                }
                if (index < array.length) {
                    setTimeout(runChunk, 0);
                } else {
                    resolve(results);
                }
            }

            runChunk();
        });
    }

    const big = Array.from({ length: 100000 }, function (_, i) {
        return i;
    });

    const t0 = Date.now();

    chunk(big, function (n) {
        return n * 2;
    }, 10000).then(function (results) {
        const elapsed = Date.now() - t0;
        const sum = results.reduce(function (acc, n) {
            return acc + n;
        }, 0);

        R.line(lines, "array length", results.length);
        R.line(lines, "chunks of 10000", "10 macrotask yields");
        R.line(lines, "sum of doubled values", sum);
        R.line(lines, "elapsed (ms)", elapsed);
        R.note(lines, "Processing yields between chunks so the event loop can breathe.");

        R.show("#homeworkOut3", lines);
    });

})();



// Task 4 — await is a microtask

(function () {

    const R = RefOutput;
    const lines = [];

    async function runAwait() {
        R.line(lines, "sync start", "before await");
        await Promise.resolve();
        R.line(lines, "after await", "microtask continuation");
    }

    R.line(lines, "predicted order", "before await → setTimeout → after await");
    R.line(lines, "sync start", "before await");

    setTimeout(function () {
        R.line(lines, "setTimeout(0)", "macrotask");
        R.show("#homeworkOut4", lines);
    }, 0);

    runAwait().then(function () {
        R.line(lines, "after await", "microtask (runs before setTimeout)");
    });

})();
