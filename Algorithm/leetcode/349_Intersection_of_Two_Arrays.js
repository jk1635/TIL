// https://leetcode.com/problems/intersection-of-two-arrays/

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2]; // [2]
// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4]; // [9, 4]

const intersection = function (nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);

    return Array.from(setNums1).filter(item => setNums2.has(item));
};

console.log(intersection(nums1, nums2));