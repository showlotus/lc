/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;

  if ((root.left && root.left.val !== root.val) || !isUnivalTree(root.left)) {
    return false;
  }

  if (
    (root.right && root.right.val !== root.val) ||
    !isUnivalTree(root.right)
  ) {
    return false;
  }

  return true;
};
// @lc code=end

var isUnivalTree_bfs = function (root) {
  let stack = [root];
  while (stack.length) {
    const curr = stack.shift();
    if (
      (curr.left && curr.left.val !== curr.val) ||
      (curr.right && curr.right.val !== curr.val)
    ) {
      return false;
    }

    curr.left && stack.push(curr.left);
    curr.right && stack.push(curr.right);
  }
  return true;
};

var root = {
  val: 2,
  left: {
    val: 2,
    left: {
      val: 2,
    },
    right: {
      val: 2,
    },
  },
  right: {
    val: 1,
  },
};

let res = isUnivalTree(root);

console.log(res);
