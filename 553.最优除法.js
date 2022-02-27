/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  const n = nums.length
  if (n > 2) {
    return `${nums[0]}/(${nums.slice(1).join("/")})`
  }
  return nums.join("/")
}
// @lc code=end
var nums = [1000, 100, 10, 2]
nums = [1, 2, 3]

console.log(optimalDivision(nums))
