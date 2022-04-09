/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    let n = queue.length;
    for (let i = 0; i < n; ++i) {
      let t = queue.shift();
      level.push(t.val);
      if (t.children && t.children.length) {
        queue.push(...t.children);
      }
    }
    res.push(level);
  }
  return res;
};
// @lc code=end
var root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: null,
        },
        { val: 6, children: null },
      ],
    },
    { val: 2, children: null },
    { val: 4, children: null },
  ],
};
console.log(levelOrder(root));
