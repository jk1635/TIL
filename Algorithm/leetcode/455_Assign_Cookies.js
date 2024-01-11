// https://leetcode.com/problems/assign-cookies/

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

const g = [1, 2, 3];
const s = [1, 1]; // 1
// const g = [1, 2];
// const s = [1, 2, 3]; // 2
// const g = [10, 9, 8, 7];
// const s = [5, 6, 7, 8]; // 2

const findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let count = 0;
    let j = 0;

    for (let i = 0; i < g.length; i++) {
        while (g[i] > s[j] && j < s.length) {
            j++;
        }
        if (g[i] <= s[j] && j < s.length) {
            count++;
            j++;
        }
    }
    return count;
};

console.log(findContentChildren(g, s));