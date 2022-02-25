/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let res = -1
  nums.reduceRight((next, curr) => {
    if (curr < next) {
      res = Math.max(res, next - curr)
      return next
    } else {
      return curr
    }
  })
  return res
}
// @lc code=end
var nums = [7, 1, 5, 4]
nums = [9, 4, 3, 2]
nums = [1, 5, 2, 10]
nums = [1, 2, 7]
console.log(maximumDifference(nums))
