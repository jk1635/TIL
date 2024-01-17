// https://leetcode.com/problems/largest-odd-number-in-string

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

/**
 * @param {string} num
 * @return {string}
 */

const num = "52"; // "5"
// const num = "4206"; // ""
// const num = "35427"; // "35427"

const largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) {
            return num.substring(0, i + 1);
        }
    }
    return "";
};

console.log(largestOddNumber(num));