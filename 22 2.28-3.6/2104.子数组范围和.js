/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let len = nums.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    for (let j = i; j < len; j++) {
      max = Math.max(max, nums[j])
      min = Math.min(min, nums[j])
      sum += max - min
    }
  }

  return sum
}
// @lc code=end
var nums = [1, 2, 3]
nums = [1, 3, 3]
nums = [4, -2, -3, 4, 1]
// nums = [1]
console.log(subArrayRanges(nums))
// console.log(reg.test(text) && reg.test(text))
