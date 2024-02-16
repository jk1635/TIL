// https://leetcode.com/problems/timeout-cancellation

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

const fn = x => x * 5;
const args = [2];
const t = 20; // [{"time": 20, "returned": 10}]
// const fn = x => x ** 2;
// const args = [2];
// const t = 100; // []
// const fn = (x1, x2) => x1 * x2;
// const args = [2, 4];
// const t = 30; // [{"time": 30, "returned": 8}]

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellable = function (fn, args, t) {
    const timeout = setTimeout(() => fn(...args), t);

    return () => clearTimeout(timeout);
};

console.log(cancellable(fn, args, t));

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */