// TODO: Need to solve

// https://leetcode.com/problems/function-composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

/**
 * @param {Function[]} functions
 * @return {Function}
 */

const compose = function (functions) {
    return function (x) {
        const n = functions.length;
        for (let i = n - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
