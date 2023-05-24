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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }

  const res = []
  const stack = [root]
  while (stack.length) {
    const currLevel = []
    const currNums = stack.length
    for (let i = 0; i < currNums; i++) {
      const node = stack.shift()
      currLevel.push(node.val)
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res.push(currLevel)
  }
  return res
}

const { Array2BinaryTree2 } = require("../../libs/tree")
let root = [3, 9, 20, null, null, 15, 7]
root = [1]
root = []

const tree = Array2BinaryTree2(root)
const res = levelOrder(tree)

console.log(res)
