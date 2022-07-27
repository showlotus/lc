/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    // 若为叶子节点
    if (!root.left && !root.right) {
      return null;
    }

    if (!root.right) {
      return root.left;
    }

    if (!root.left) {
      return root.right;
    }

    let target = root.right;
    while (target.left) {
      target = target.left;
    }

    root.right = deleteNode(root.right, target.val);
    target.right = root.right;
    target.left = root.left;
    return target;
  }
};
// @lc code=end

let root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};

let res = deleteNode(root, 3);

console.log(res);
