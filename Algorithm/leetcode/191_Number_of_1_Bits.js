// https://leetcode.com/problems/number-of-1-bits/

// Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// The input must be a binary string of length 32.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const n = 0b00000000000000000000000000001011 // 3
// const n = 0b11111111111111111111111111111101 // 31

const hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & 1) === 1) {
            count++;
        }
        n = n >>> 1;
    }
    return count;
};

console.log(hammingWeight(n));