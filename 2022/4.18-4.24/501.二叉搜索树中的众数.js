/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  /* BST的中序遍历是一个非递减的有序序列 */
  let res = [];
  let maxNums = 0;
  let base = null;
  let cnt = 1;

  const update = val => {
    if (val === base) {
      cnt++;
    } else {
      cnt = 1;
      base = val;
    }

    if (cnt === maxNums) {
      res.push(base);
    }

    if (cnt > maxNums) {
      maxNums = cnt;
      res = [base];
    }
  };

  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    update(node.val);
    dfs(node.right);
  };

  dfs(root);
  return res;
};
// @lc code=end
var findMode_ = function (root) {
  let cnt = {};
  let max = 0;
  const dfs = root => {
    if (!root) return;
    if (!cnt[root.val]) {
      cnt[root.val] = 0;
    }
    cnt[root.val]++;
    max = Math.max(max, cnt[root.val]);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return Object.keys(cnt)
    .filter(key => cnt[key] === max)
    .map(Number);
};

var root = {
  val: 1,
  left: null,
  right: {
    val: 10,
    left: {
      val: 6,
      left: {
        val: 4,
        left: {
          val: 3,
        },
        right: {
          val: 4,
        },
      },
      right: {
        val: 7,
        left: {
          val: 6,
        },
        right: {
          val: 7,
        },
      },
    },
  },
};

// root = { val: 1 };

console.log(findMode(root));
console.log(findMode_(root));
