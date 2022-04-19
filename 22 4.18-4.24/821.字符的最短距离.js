/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let res = [];
  let len = s.length;
  let nearestC = len;
  for (let i = 0; i < len; i++) {
    if (s[i] === c) {
      nearestC = i;
    }
    res[i] = Math.abs(i - nearestC);
  }

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === c) {
      nearestC = i;
    }
    res[i] = Math.min(Math.abs(i - nearestC), res[i]);
  }

  return res;
};
// @lc code=end
var s = "aaab",
  c = "b";
(s = "loveleetcode"), (c = "e");
(s = "le"), (c = "l");
console.log(shortestToChar(s, c));
