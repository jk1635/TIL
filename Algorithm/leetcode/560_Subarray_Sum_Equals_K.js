// https://leetcode.com/problems/subarray-sum-equals-k

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const nums = [1, 1, 1];
const k = 2; // 2
// const nums = [1, 2, 3];
// const k = 3; // 2

// 1-1.
const subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map[sum - k]) {
            count += map[sum - k];
        }

        if (sum === k) {
            count++;
        }

        if (!map[sum]) {
            map[sum] = 0;
            map[sum]++;
        }
    }

    return count;
};

console.log(subarraySum(nums, k));

// 1-2.
const subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        const sumCount = map.has(sum) ? map.get(sum) : 0;
        map.set(sum, sumCount + 1);
    }

    return count;
};

console.log(subarraySum(nums, k));