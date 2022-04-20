/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let res = 0;
  let preSum = [0];
  gain.forEach((v, i) => {
    preSum[i + 1] = preSum[i] + v;
    res = Math.max(preSum[i + 1], res);
  });
  return res;
};
// @lc code=end
var gain = [-5, 1, 5, 0, -7];
gain = [5];

console.log(largestAltitude(gain));
