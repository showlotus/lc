/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function (root) {
  const height = getRootHeight(root) - 1
  const m = height + 1
  const n = Math.pow(2, height + 1) - 1
  const res = new Array(m).fill(0).map(() => new Array(n).fill(""))

  const format = (root, arr, row, col) => {
    if (!root) return
    arr[row][col] = String(root.val)
    format(root.left, arr, row + 1, col - Math.pow(2, height - row - 1))
    format(root.right, arr, row + 1, col + Math.pow(2, height - row - 1))
  }
  format(root, res, 0, (n - 1) / 2)
  return res
}

function getRootHeight(root) {
  if (!root) return 0
  return Math.max(getRootHeight(root.left), getRootHeight(root.right)) + 1
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
}

root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 4
    }
  },
  right: {
    val: 3
  }
}

var res = printTree(root)

console.log(res)
