/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let res
  const queue = [root]
  while (queue.length) {
    const q = queue.shift()
    q.right && queue.push(q.right)
    q.left && queue.push(q.left)
    res = q.val
  }
  return res
}
// @lc code=end

var findBottomLeftValue_self = function (root) {
  const queue = [root]
  while (queue.length) {
    let level = []
    let res
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const curr = queue.shift()
      if (i === 0) {
        res = curr.val
      }
      curr.left && level.push(curr.left)
      curr.right && level.push(curr.right)
    }
    if (!queue.length && !level.length) {
      return res
    }
    queue.push(...level)
  }
}

const { Array2BinaryTree } = require("../../libs/tree")

let arr = [1, 2, 3, 4, null, 5, 6, null, null, 7]
arr = [2, 1, 3]
arr = [1, 2, 3]
// console.log(Array2BinaryTree(arr))
let res = findBottomLeftValue(Array2BinaryTree(arr))

console.log(res)
