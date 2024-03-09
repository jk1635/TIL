// TODO: Need to check

// https://leetcode.com/problems/minimum-common-value

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const nums1 = [1, 2, 3];
const nums2 = [2, 4]; // 2
// const nums1 = [1, 2, 3, 6];
// const nums2 = [2, 3, 4, 5]; // 2

const getCommon = function (nums1, nums2) {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            return nums1[i];
        }
    }

    return -1;
};

console.log(getCommon(nums1, nums2));
