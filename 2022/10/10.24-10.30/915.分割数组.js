/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const n = nums.length
  // leftMax[i]: 前 i 个元素中的最大值
  const leftMax = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1])
  }
  let res = n
  let rightMin = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    if (leftMax[i + 1] <= rightMin) {
      res = Math.min(res, i + 1)
    }
    rightMin = Math.min(rightMin, nums[i])
  }
  return res
}
// @lc code=end
let nums = [5, 0, 3, 8, 6]
nums = [1, 1, 1, 0, 6, 12]
nums = [2, 3]
nums = [6, 2, 3, 6]
nums = [3, 2, 3, 6]
let res = partitionDisjoint(nums)
console.log(res)
