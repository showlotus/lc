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
  let leftPos = 0
  let leftMax = nums[0]
  let currMax = nums[0]
  for (let i = 1; i < n - 1; i++) {
    currMax = Math.max(currMax, nums[i])
    if (nums[i] < leftMax) {
      leftMax = currMax
      leftPos = i
    }
  }
  return leftPos + 1
}
// @lc code=end
let nums = [5, 0, 3, 8, 6]
nums = [1, 1, 1, 0, 6, 12]
nums = [6, 2, 3, 6]
nums = [3, 2, 3, 6]
nums = [2, 3]
let res = partitionDisjoint(nums)
console.log(res)
