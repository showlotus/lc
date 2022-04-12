/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i in nums) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  nums.forEach(v => {
    let t = Math.abs(v);
    if (t <= n) {
      nums[t - 1] = -Math.abs(nums[t - 1]);
    }
  });

  for (let i in nums) {
    if (nums[i] > 0) return +i + 1;
  }
  return n + 1;
};
// @lc code=end
var nums = [7, 8, 9, 11, 12];
nums = [3, 4, -1, 1, 7, 8];
// nums = [1, 2, 0];
console.log(firstMissingPositive(nums));
