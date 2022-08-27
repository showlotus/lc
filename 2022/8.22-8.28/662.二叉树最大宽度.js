/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
  // JS 存在计数溢出的问题，需要使用 BigInt
  let maxWidth = 1n
  const map = new Map()
  const stack = [root]
  map.set(root, 0n)
  while (stack.length) {
    let n = stack.length
    const currWidth = map.get(stack[n - 1]) - map.get(stack[0]) + 1n
    maxWidth = maxWidth > currWidth ? maxWidth : currWidth
    while (n--) {
      const node = stack.shift()
      const idx = map.get(node)
      if (node.left) {
        stack.push(node.left)
        map.set(node.left, 2n * idx)
      }
      if (node.right) {
        stack.push(node.right)
        map.set(node.right, 2n * idx + 1n)
      }
    }
  }
  return maxWidth
}
// @lc code=end
var root = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5
    }
  },
  right: {
    val: 2
  }
}

var res = widthOfBinaryTree(root)
console.log(res)
