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
  // 动态规划
  // dpA[i]：以 nums[i] 结尾的最大子序列和
  // 动态转移方程：dpA[i] = Max(dpA[i - 1] + nums[i], nums[i])
  // dpB[i]：以 nums[i] 结尾的最小子序列和
  // 动态转移方程：dpB[i] = Min(dpB[i - 1] + nums[i], nums[i])

  const n = nums.length
  const dpA = new Array(n).fill(0)
  const dpB = new Array(n).fill(0)
  dpA[0] = dpB[0] = nums[0]

  let max = dpA[0]
  let min = dpB[0]
  for (let i = 1; i < n; i++) {
    dpA[i] = Math.max(dpA[i - 1] + nums[i], nums[i])
    dpB[i] = Math.min(dpB[i - 1] + nums[i], nums[i])
    max = Math.max(max, dpA[i])
    min = Math.min(min, dpB[i])
  }

  return Math.max(Math.abs(max), Math.abs(min))
}
// @lc code=end
let nums = [1, -3, 2, 3, -4]
// nums = [2, -5, 1, -4, 3, -2]
// nums = [2, -1]

const res = maxAbsoluteSum(nums)
console.log(res)
