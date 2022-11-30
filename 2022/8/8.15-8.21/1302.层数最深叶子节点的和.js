/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let maxLevel = 0
  let sum = 0

  const dfs = (root, level) => {
    if (!root) return

    if (level > maxLevel) {
      maxLevel = level
      sum = root.val
    } else if (level === maxLevel) {
      sum += root.val
    }

    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }

  dfs(root, 1)

  return sum
}
// @lc code=end
