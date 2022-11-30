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
  let maxLevel = 0;
  const dfs = (node, level) => {
    if (!node) return;
    node.level = level;
    maxLevel = Math.max(maxLevel, level);
    if (node.children) {
      node.children.forEach(n => {
        dfs(n, level + 1);
      });
    }
  };
  // 添加层级
  dfs(root, 0);

  let res = new Array(maxLevel + 1).fill(0).map(() => []);
  let queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    res[curr.level].push(curr.val);
    if (curr.children && curr.children.length) {
      queue.push(...curr.children);
    }
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
