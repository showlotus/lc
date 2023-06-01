/*
 * @lc app=leetcode.cn id=1110 lang=javascript
 *
 * [1110] 删点成林
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const deleteNodes = new Set(to_delete)
  const res = []

  const dfs = (root, isRoot) => {
    if (!root) {
      return null
    }
    const isDelete = deleteNodes.has(root.val)
    root.left = dfs(root.left, isDelete)
    root.right = dfs(root.right, isDelete)
    if (isDelete) {
      return null
    } else {
      if (isRoot) {
        res.push(root)
      }
      return root
    }
  }

  dfs(root, true)
  return res
}

// @lc code=end
const { Array2BinaryTree } = require("../../libs/tree")

let root = [1, 2, 3, 4, 5, 6, 7]
let to_delete = [3, 5]

root = Array2BinaryTree(root)

const res = delNodes(root, to_delete)
console.log(res)
