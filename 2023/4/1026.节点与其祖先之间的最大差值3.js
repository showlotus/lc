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
  return dfs(root, root.val, root.val)
}

const dfs = (root, max, min) => {
  if (!root) {
    return 0
  }

  let diff = Math.max(Math.abs(max - root.val), Math.abs(min - root.val))
  max = Math.max(max, root.val)
  min = Math.min(min, root.val)
  diff = Math.max(diff, dfs(root.left, max, min))
  diff = Math.max(diff, dfs(root.right, max, min))
  return diff
}
// @lc code=end
let root = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 0,
    left: {
      val: 9
    }
  }
}

root = {
  val: 2,
  right: {
    val: 0,
    left: {
      val: 1
    }
  }
}

const res = maxAncestorDiff(root)
console.log(res)
