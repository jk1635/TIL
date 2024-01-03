// https://leetcode.com/problems/counting-bits/

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */

let n = 2; // [0, 1, 1]
// let n = 5 // [0, 1, 1, 2, 1, 2]

const countBits = function (n) {
    const array = [...new Array(n + 1).keys()];
    return array.map(number => {
        let count = 0;
        while (number) {
            count += (number & 1)
            number >>= 1;
        }
        return count;
    });
};

console.log(countBits(n));