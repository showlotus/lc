/*
 * @lc app=leetcode.cn id=1026 lang=javascript
 *
 * [1026] 节点与其祖先之间的最大差值
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
var maxAncestorDiff = function (root) {
  let res = Number.MIN_VALUE
  // max 为祖先节点中的最大值
  // min 为祖先节点中的最小值
  const dfs = (root, max, min) => {
    res = Math.max(res, Math.abs(max - root.val), Math.abs(min - root.val))
    if (root.left) {
      dfs(root.left, Math.max(max, root.val), Math.min(min, root.val))
    }
    if (root.right) {
      dfs(root.right, Math.max(max, root.val), Math.min(min, root.val))
    }
  }
  dfs(root, root.val, root.val)
  return res
}
// @lc code=end
let root = {
  val: 1,
  left: {
    val: 3
  },
  right: {
    val: 100
  }
}

const res = maxAncestorDiff(root)
console.log(res)
