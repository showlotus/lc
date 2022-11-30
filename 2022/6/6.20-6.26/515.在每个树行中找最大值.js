/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    let max = Number.MIN_SAFE_INTEGER
    const n = stack.length
    for (let i = 0; i < n; ++i) {
      const currNode = stack.shift()
      currNode.left && stack.push(currNode.left)
      currNode.right && stack.push(currNode.right)
      max = Math.max(max, currNode.val)
    }
    res.push(max)
  }
  return res
}
// @lc code=end
