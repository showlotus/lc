/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let res = 0
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= max) {
      res += max - nums[i] + 1
      max = max + 1
    } else {
      max = nums[i]
    }
  }
  return res
}
// @lc code=end

let nums = [1, 5, 2, 4, 1]
nums = [8]
nums = [1, 1, 1]
const res = minOperations(nums)
console.log(res)
