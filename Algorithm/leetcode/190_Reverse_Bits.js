// https://leetcode.com/problems/reverse-bits/

// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

let n = 0b00000010100101000001111010011100 // 964176192
// let n = 0b11111111111111111111111111111101 // 3221225471

const reverseBits = function (n) {
    let reverse = 0;
    for (let i = 0; i < 32; i++) {
        reverse = (reverse << 1) | (n & 1);
        n >>>= 1;
    }
    return reverse >>> 0;
};

console.log(reverseBits(n))