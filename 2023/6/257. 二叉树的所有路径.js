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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  const dfs = (node, seqs = "") => {
    if (!node.left && !node.right) {
      res.push(seqs ? `${seqs}->${node.val}` : `${node.val}`)
      return
    }
    if (node.left) {
      dfs(node.left, seqs ? `${seqs}->${node.val}` : `${node.val}`)
    }
    if (node.right) {
      dfs(node.right, seqs ? `${seqs}->${node.val}` : `${node.val}`)
    }
  }

  dfs(root)
  return res
}

let root = [1, 2, 3, null, 5]
root = [1, 2, 3, 4, 5]

const { array2BinaryTree } = require("../../test/array2tree")
const res = binaryTreePaths(array2BinaryTree(root))
console.log(res)
