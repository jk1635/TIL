// https://leetcode.com/problems/sort-characters-by-frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

const s = "tree" // "eert" or "eetr"
// const s = "cccaaa" // "aaaccc" or "cccaaa"
// const s = "Aabb" // "bbAa" or "bbaA"

/**
 * @param {string} s
 * @return {string}
 */

const frequencySort = function (s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    const sortedKeys = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));

    let sortedString = '';
    sortedKeys.forEach(key => {
        sortedString += key.repeat(map.get(key));
    });

    return sortedString;
};

console.log(frequencySort(s));