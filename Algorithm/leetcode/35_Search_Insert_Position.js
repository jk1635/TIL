// https://leetcode.com/problems/search-insert-position/description/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1, 3, 5, 6]; const target = 5; // 2
// const nums = [1, 3, 5, 6]; const target = 2; // 1
// const nums = [1, 3, 5, 6]; const target = 7; // 4

const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

console.log(searchInsert(nums, target));
