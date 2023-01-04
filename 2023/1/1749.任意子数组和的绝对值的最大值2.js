/*
 * @lc app=leetcode.cn id=1749 lang=javascript
 *
 * [1749] 任意子数组和的绝对值的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  // 前缀和
  // 记录最大值 max，最小值 min
  // max 与 min 的初始值都为 0
  // 结果就是 max - min
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  let min = 0
  let max = 0

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
    min = Math.min(min, preSum[i + 1])
    max = Math.max(max, preSum[i + 1])
  }

  return max - min
}
// @lc code=end
let nums = [2, -5, 1, -4, 3, -2]
// nums = [1, -3, 2, 3, -4]
nums = [2, -1]

const res = maxAbsoluteSum(nums)
console.log(res)
