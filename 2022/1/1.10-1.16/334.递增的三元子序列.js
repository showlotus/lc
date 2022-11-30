/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length <= 2) return false
  let small = Number.MAX_SAFE_INTEGER
  let mid = Number.MAX_SAFE_INTEGER
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] <= small) {
      small = nums[i]
    } else if (nums[i] <= mid) {
      mid = nums[i]
    } else {
      return true
    }
  }
  return false
}
// @lc code=end

var nums = [2, 1, 5, 0, 4, 6]

// nums = [5, 4, 3, 2, 1]

console.log(increasingTriplet(nums))
