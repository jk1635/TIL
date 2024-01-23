// https://leetcode.com/problems/median-of-two-sor/ted-arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

const nums1 = [1, 3];
const nums2 = [2]; // 2.00000
// const nums1 = [1, 2];
// const nums2 = [3, 4]; // 2.50000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 1. Current time complexity is O((n+m) log(n+m)), but needs to be O(log(n+m)).
const findMedianSortedArrays = function (nums1, nums2) {
    const mergedNum = nums1.concat(nums2);
    mergedNum.sort((a, b) => a - b);

    let median;
    const middleIndex = Math.floor(mergedNum.length / 2);

    if (mergedNum.length % 2 === 0) {
        median = (mergedNum[middleIndex - 1] + mergedNum[middleIndex]) / 2;
    } else {
        median = mergedNum[middleIndex];
    }
    return median;
};

console.log(findMedianSortedArrays(nums1, nums2));