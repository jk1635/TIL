// https://leetcode.com/problems/maximum-depth-of-binary-tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

const { maximumDepthOfBinaryTreeGenerator } = require('../../docs/algorithmUtils');

const root = maximumDepthOfBinaryTreeGenerator([3, 9, 20, null, null, 15, 7]); // 3
// const root = maximumDepthOfBinaryTreeGenerator([1, null, 2]); // 2

const maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

console.log(maxDepth(root));
