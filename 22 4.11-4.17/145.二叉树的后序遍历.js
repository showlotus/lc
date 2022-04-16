/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  let currNode = root;
  while (currNode || stack.length) {
    if (currNode) {
      res.unshift(currNode.val);
      stack.push(currNode);
      currNode = currNode.right;
    } else {
      let temp = stack.pop();
      currNode = temp.left;
    }
  }
  return res;
};
// @lc code=end

var postorderTraversal_recursive = function (root) {
  let res = [];
  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  };
  dfs(root);
  return res;
};

// 前序遍历，迭代写法
var preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let currNode = root;
  while (currNode || stack.length) {
    if (currNode) {
      res.push(currNode.val);
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      let temp = stack.pop();
      currNode = temp.right;
    }
  }
  return res;
};

let root = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

console.log(postorderTraversal(root));
console.log(preorderTraversal(root));
