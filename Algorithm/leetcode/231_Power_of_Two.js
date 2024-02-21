// https://leetcode.com/problems/power-of-two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

const n = 1; // true
// const n = 16; // true
// const n = 3; // false

/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfTwo = function (n) {
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n % 2 === 1) {
        return false;
    }
    return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(n));