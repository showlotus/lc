/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
  let maxCounts = 1
  let map = {} // or new Map()
  const dfs = root => {
    if (!root) return 0
    const sum = root.val + dfs(root.left) + dfs(root.right)
    if (map[sum]) {
      map[sum]++
      maxCounts = Math.max(maxCounts, map[sum])
    } else {
      map[sum] = 1
    }
    return sum
  }

  dfs(root)

  let res = []
  for (let [key, val] of Object.entries(map)) {
    if (val === maxCounts) {
      res.push(key)
    }
  }
  return res
}
// @lc code=end

var findFrequentTreeSum = function (root) {
  let maxCounts = 1
  let map = new Map()
  const dfs = root => {
    if (!root) return 0
    const sum = root.val + dfs(root.left) + dfs(root.right)
    if (map.has(sum)) {
      const newCounts = map.get(sum) + 1
      map.set(sum, newCounts)
      maxCounts = Math.max(maxCounts, newCounts)
    } else {
      map.set(sum, 1)
    }
    return sum
  }

  dfs(root)

  let res = []
  for (let [key, val] of map) {
    if (val === maxCounts) {
      res.push(key)
    }
  }
  return res
}

const { Array2BinaryTree } = require("../../libs/tree")
let arr = [5, 2, -3]
arr = [5, 2, -5]
arr = [1, 1, 1]
const root = Array2BinaryTree(arr)
const res = findFrequentTreeSum(root)
console.log(res)
