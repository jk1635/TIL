// https://leetcode.com/problems/first-unique-character-in-a-string/

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */

const s = "leetcode"; // 0
// const s = "loveleetcode"; // 2
// const s = "aabb"; // -1

const firstUniqChar = function (s) {
    const count = {};

    for (const char of s) {
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar(s));