/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map()
  const res = new Set()
  let idx = 0
  const dfs = node => {
    if (!node) {
      return 0
    }

    const tag = [node.val, dfs(node.left), dfs(node.right)]
    const hash = tag.join()
    if (map.has(hash)) {
      const seq = map.get(hash)
      res.add(seq[0])
      return seq[1]
    } else {
      map.set(hash, [node, ++idx])
      return idx
    }
  }
  dfs(root)
  return [...res]
}
// @lc code=end
