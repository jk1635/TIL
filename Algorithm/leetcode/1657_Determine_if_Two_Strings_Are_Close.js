// https://leetcode.com/problems/determine-if-two-strings-are-close/

// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters. For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character. For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary. Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

const word1 = "abc";
const word2 = "bca"; // true
// const word1 = "a";
// const word2 = "aa"; // false
// const word1 = "cabbba";
// const word2 = "abbccc"; // true

// 1-1.
const closeStrings = function (word1, word2) {
    function buildHashMap(word) {
        const map = {};

        for (let i = 0; i < word.length; i++) {
            if (map[word[i]]) {
                map[word[i]]++;
            } else {
                map[word[i]] = 1;
            }
        }
        return map;
    }

    const map1 = buildHashMap(word1);
    const map2 = buildHashMap(word2);

    const keyMap1 = Object.keys(map1).sort();
    const keyMap2 = Object.keys(map2).sort();

    if (keyMap1.length !== keyMap2.length) return false;

    for (let i = 0; i < keyMap1.length; i++) {
        if (keyMap1[i] !== keyMap2[i]) return false;
    }

    const valueMap1 = Object.values(map1).sort();
    const valueMap2 = Object.values(map2).sort();

    for (let i = 0; i < valueMap1.length; i++) {
        if (valueMap1[i] !== valueMap2[i]) return false;
    }
    return true;
};

console.log(closeStrings(word1, word2));

// 1-2.
const closeStrings = function (word1, word2) {
    function buildHashMap(word) {
        const map = new Map();

        for (let i = 0; i < word.length; i++) {
            if (map.has(word[i])) {
                map.set(word[i], map.get(word[i]) + 1);
            } else {
                map.set(word[i], 1);
            }
        }
        return map;
    }

    const map1 = buildHashMap(word1);
    const map2 = buildHashMap(word2);

    if (map1.size !== map2.size) return false;

    for (const key of map1.keys()) {
        if (!map2.has(key)) return false;
    }

    const valueMap1 = Array.from(map1.values()).sort();
    const valueMap2 = Array.from(map2.values()).sort();

    for (let i = 0; i < map1.size; i++) {
        if (valueMap1[i] !== valueMap2[i]) return false;
    }
    return true;
};

console.log(closeStrings(word1, word2));

// 2. Another method
const closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    if (word1 === word2) return true;

    const arr1 = Array(26).fill(0);
    const arr2 = Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        arr1[word1.charCodeAt(i) - 97]++;
        arr2[word2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((arr1[i] > 0 && arr2[i] === 0) || (arr2[i] > 0 && arr1[i] === 0)) return false;
    }

    const str1 = arr1.sort((a, b) => a - b).join("");
    const str2 = arr2.sort((a, b) => a - b).join("");

    return str1 === str2;
};

console.log(closeStrings(word1, word2));