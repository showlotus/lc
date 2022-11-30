/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return Math.max(0, max - min - k * 2);
};
// @lc code=end
var nums = [1, 3, 6],
  k = 3;
nums = [0, 10];
// nums = [1];
k = 2;
console.log(smallestRangeI(nums, k));
