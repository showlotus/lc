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
var maxAncestorDiff = function (root, max = root.val, min = root.val) {
  const currMax = Math.max(Math.abs(root.val - max), Math.abs(root.val - min))
  if (root.left && root.right) {
    return Math.max(
      currMax,
      maxAncestorDiff(
        root.left,
        Math.max(max, root.val),
        Math.min(min, root.val)
      ),
      maxAncestorDiff(
        root.right,
        Math.max(max, root.val),
        Math.min(min, root.val)
      )
    )
  } else if (root.left) {
    return Math.max(
      currMax,
      maxAncestorDiff(
        root.left,
        Math.max(max, root.val),
        Math.min(min, root.val)
      )
    )
  } else if (root.right) {
    return Math.max(
      currMax,
      maxAncestorDiff(
        root.right,
        Math.max(max, root.val),
        Math.min(min, root.val)
      )
    )
  } else {
    return currMax
  }
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

// root = {
//   val: 2,
//   right: {
//     val: 0,
//     left: {
//       val: 1
//     }
//   }
// }

const res = maxAncestorDiff(root)
console.log(res)
