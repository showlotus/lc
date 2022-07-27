/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  const abs_t = Math.abs(target);
  const n = Math.ceil((Math.sqrt(8 * abs_t + 1) - 1) / 2);
  const sum = (n * (n + 1)) / 2;
  return n + (sum - abs_t) * 2;
};
// @lc code=end
var target = 65;
target = 3;
target = 5;
target = -65;
target = 2;

console.log(reachNumber(target));
