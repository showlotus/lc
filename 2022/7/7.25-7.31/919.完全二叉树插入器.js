/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
 */
var CBTInserter = function (root) {
  this.candidate = [] // 收集没有两个子节点的节点
  this.root = root

  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    if (!(node.left && node.right)) {
      this.candidate.push(node)
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const newNode = new TreeNode(val)
  const node = this.candidate[0]
  if (!node.left) {
    node.left = newNode
  } else {
    node.right = newNode
    this.candidate.shift()
  }
  this.candidate.push(newNode)
  return node.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
var root = {
  val: 1,
  left: {
    val: 2
  }
}
var obj = new CBTInserter(root)
const log = val => console.log(val)
log(obj.insert(3))
log(obj.insert(4))
log(obj.get_root())
