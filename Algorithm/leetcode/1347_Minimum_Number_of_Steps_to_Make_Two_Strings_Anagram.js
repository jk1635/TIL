// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

const s = "bab";
const t = "aba"; // 1
// const s = "leetcode";
// const t = "practice"; // 5
// const s = "anagram";
// const t = "mangaar"; // 0

const minSteps = function (s, t) {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    let step = 0;

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] && map[t[i]] > 0) {
            map[t[i]]--;
        } else {
            step++;
        }
    }
    return step;
};

console.log(minSteps(s, t));