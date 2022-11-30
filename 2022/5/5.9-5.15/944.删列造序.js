/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0;
  let n = strs.length;
  let m = strs[0].length;
  for (let col = 0; col < m; col++) {
    for (let row = 0; row < n - 1; row++) {
      if (strs[row][col] > strs[row + 1][col]) {
        res++;
        break;
      }
    }
  }
  return res;
};
// @lc code=end
var strs = ["cba", "daf", "ghi"];
strs = ["a", "b"];
strs = ["zyx", "wvu", "tsr"];
strs = ["a"];
console.log(minDeletionSize(strs));
