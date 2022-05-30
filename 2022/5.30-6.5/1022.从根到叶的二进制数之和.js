/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
  const dfs = (node, val) => {
    if (!node) return 0;

    val = (val << 1) | node.val;

    if (!node.left && !node.right) {
      return val;
    }

    return dfs(node.left, val) + dfs(node.right, val);
  };

  return dfs(root, 0);
};
// @lc code=end
var sumRootToLeaf_ = function (root) {
  let res = 0;

  const dfs = (node, sequence) => {
    if (!node) return;

    let newSequence = sequence + node.val;
    node.left && dfs(node.left, newSequence);
    node.right && dfs(node.right, newSequence);

    if (!node.left && !node.right) {
      res += parseInt(newSequence, 2);
    }
  };

  dfs(root, "0");
  return res;
};

let root = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 1,
    },
  },
};

root = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 0,
    },
  },
  right: {
    val: 0,
    left: {
      val: 1,
    },
  },
};

let res = sumRootToLeaf(root);

console.log(res);
