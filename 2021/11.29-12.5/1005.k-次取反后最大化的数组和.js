/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b))
  for (let i = nums.length - 1; i >= 0 && k > 0; i--) {
    if (nums[i] < 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  console.log(nums)
  if (k % 2 === 1) {
    nums[0] = -nums[0]
  }
  return nums.reduce((prev, curr) => {
    return prev + curr
  }, 0)
};
// @lc code=end
let nums = [4, 2, 3],
  k = 1

nums = [3, -1, 0, 2], k = 3
// nums = [2, -3, 1, 5, -4], k = 4
// nums = [2, -3, -1, 5, -4], k = 2
// nums = [2], k = 4
console.log(largestSumAfterKNegations(nums, k))
