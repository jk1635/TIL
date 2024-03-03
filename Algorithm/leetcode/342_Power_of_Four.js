// https://leetcode.com/problems/power-of-four

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

/**
 * @param {number} n
 * @return {boolean}
 */

const n = 16; // true
// const n = 5; // false
// const n = 1; // true

const isPowerOfFour = function (n) {
    if (n === 1) {
        return true;
    }
    if (n % 4 !== 0 || n === 0) {
        return false;
    }
    return isPowerOfFour(n / 4);
};

console.log(isPowerOfFour(n));