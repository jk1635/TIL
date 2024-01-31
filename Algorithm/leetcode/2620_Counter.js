// https://leetcode.com/problems/counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const n = 10;
const calls = ["call", "call", "call"]; // [10, 11, 12]
// const n = -2;
// const calls = ["call", "call", "call", "call", "call"]; // [-2, -1, 0, 1, 2]

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = function (n) {
    return function () {
        return n++;
    };
};

const counter = createCounter(n);
const results = calls.map(call => counter[call]());

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

console.log(results);