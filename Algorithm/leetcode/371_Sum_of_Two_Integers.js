// https://leetcode.com/problems/sum-of-two-integers/

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = function (a, b) {
    if (a === 0) {
        return b;
    }
    if (b === 0) {
        return a;
    }
    return getSum(a ^ b, (a & b) << 1);
};

// const a = 1; const b = 2; // return 3
// const a = 2; const b = 3; // return 5
const a = -1; const b = 1; // return 0

console.log(getSum(a, b));
