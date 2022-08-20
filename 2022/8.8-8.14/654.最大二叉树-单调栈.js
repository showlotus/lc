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
  const left = new Array(n).fill(-1)
  const right = new Array(n).fill(-1)
  const tree = new Array(n).fill(-1)
  const stack = []
  for (let i = 0; i < n; i++) {
    tree[i] = new TreeNode(nums[i])
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      right[stack.pop()] = i
    }
    if (stack.length) {
      left[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }

  let root = null
  for (let i = 0; i < n; i++) {
    if (left[i] === -1 && right[i] === -1) {
      root = tree[i]
    } else if (
      right[i] === -1 ||
      (left[i] !== -1 && nums[left[i]] < nums[right[i]])
    ) {
      tree[left[i]].right = tree[i]
    } else {
      tree[right[i]].left = tree[i]
    }
  }
  return root
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
