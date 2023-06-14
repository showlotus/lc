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
  let hasFind = false
  const dfs = (root, pathSum = 0) => {
    if (hasFind || !root) {
      return
    }
    if (!root.left && !root.right) {
      if (pathSum + root.val === targetSum) {
        hasFind = true
      }
      return
    }

    if (root.left) {
      dfs(root.left, pathSum + root.val)
    }

    if (root.right) {
      dfs(root.right, pathSum + root.val)
    }
  }

  dfs(root, 0)
  return hasFind
}
// @lc code=end
