/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n < 2) return n;
  let res = [0, 1];
  let half;
  let max = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      res[i] = res[i / 2];
    } else {
      half = Math.floor(i / 2);
      res[i] = res[half] + res[i - half];
      max = Math.max(max, res[i]);
    }
  }
  return max;
};
// @lc code=end

var n = 14;
// n = 90;
console.log(getMaximumGenerated(n));
console.log(getMaximumGenerated(n / 2));
