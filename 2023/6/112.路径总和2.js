/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  const stack = [[root, root.val]]
  while (stack.length) {
    const [currNode, pathSum] = stack.shift()
    if (!currNode.left && !currNode.right && pathSum === targetSum) {
      return true
    }
    if (currNode.left) {
      stack.push([currNode.left, pathSum + currNode.left.val])
    }
    if (currNode.right) {
      stack.push([currNode.right, pathSum + currNode.right.val])
    }
  }
  return false
}
// @lc code=end
