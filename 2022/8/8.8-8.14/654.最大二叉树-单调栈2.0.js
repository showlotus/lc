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
  const n = nums.length
  const tree = new Array(n).fill(-1)
  const stack = []
  for (let i = 0; i < n; i++) {
    tree[i] = new TreeNode(nums[i])

    // 当前节点大于 stack 中的节点，则不断更新当前节点的左节点
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      tree[i].left = tree[stack.pop()]
    }

    // stack 中的最后一个元素大于 nums[i]，也即是它的左边界
    // 若有左边界，则当前节点是左边界的右节点
    if (stack.length) {
      tree[stack[stack.length - 1]].right = tree[i]
    }
    stack.push(i)
  }

  return tree[stack[0]]
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
