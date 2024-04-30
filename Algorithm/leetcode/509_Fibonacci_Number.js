// https://leetcode.com/problems/fibonacci-number/description/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

/**
 * @param {number} n
 * @return {number}
 */

const n = 2;
// const n = 3;
// const n = 4;

const fib = function (n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(n)); // 1
