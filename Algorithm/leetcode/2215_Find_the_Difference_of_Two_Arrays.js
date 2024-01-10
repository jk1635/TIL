// https://leetcode.com/problems/find-the-difference-of-two-arrays/

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6]; // [[1, 3], [4, 6]]
// let nums1 = [1, 2, 3, 3];
// let nums2 = [1, 1, 2, 2]; // [[3], []]

const findDifference = function (nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);

    const uniqueNums1 = Array.from(setNums1).filter(item => !setNums2.has(item));
    const uniqueNums2 = Array.from(setNums2).filter(item => !setNums1.has(item));

    return [uniqueNums1, uniqueNums2];
};

console.log(findDifference(nums1, nums2));