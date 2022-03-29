/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let zeroNums = 0
  let res = 0
  for (let i = 0, j = 0, n = nums.length; j < n; j++) {
    zeroNums += nums[j] !== 1 ? 1 : 0
    while (zeroNums > k) {
      zeroNums -= nums[i++] !== 1 ? 1 : 0
    }
    res = Math.max(res, j - i + 1)
  }
  return res
}
// @lc code=end
var nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  K = 2
;(nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]), (K = 3)
console.log(longestOnes(nums, K))
