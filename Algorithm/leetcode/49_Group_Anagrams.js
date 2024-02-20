// https://leetcode.com/problems/group-anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]; // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// const strs = [""]; // [[""]]
// const strs = ["a"]; // [["a"]]

const groupAnagrams = function (strs) {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const key = [...strs[i]].sort().join("");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(strs[i]);
    }
    return Object.values(map);
};

console.log(groupAnagrams(strs));