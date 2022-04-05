/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const dfs = (currStr, left, right, res) => {
    if (left === 0 && right === 0) {
      res.push(currStr);
      return;
    }

    if (left > right) {
      return;
    }

    if (left > 0) {
      dfs(currStr + "(", left - 1, right, res);
    }

    if (right > 0) {
      dfs(currStr + ")", left, right - 1, res);
    }
  };

  dfs("", n, n, res);
  return res;
};
// @lc code=end
var n = 4;
let res = generateParenthesis(n);
console.log(res);
console.log(res.length);
