/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const genTree = (nums, left, right) => {
    if (left > right) {
      return null
    }

    let maxIndex = left
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i
      }
    }

    const node = new TreeNode(nums[maxIndex])
    node.left = genTree(nums, left, maxIndex - 1)
    node.right = genTree(nums, maxIndex + 1, right)
    return node
  }
  return genTree(nums, 0, nums.length - 1)
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var nums = [3, 2, 1, 6, 0, 5]

var res = constructMaximumBinaryTree(nums)

console.log(res)
