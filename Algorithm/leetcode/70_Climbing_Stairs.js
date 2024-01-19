// https://leetcode.com/problems/climbing-stairs

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */

const n = 2; // 2
// const n = 3; // 3

const climbStairs = function (n) {
    const steps = [1, 2];
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            steps.push(steps[i - 1] + steps[i - 2]);
        }
    }
    return steps[n - 1];
};

console.log(climbStairs(n));
