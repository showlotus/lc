/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let [first, second] = nums.slice(0, 2).sort((a, b) => b - a)
  const n = nums.length
  for (let i = 2; i < n; i++) {
    if (nums[i] > first) {
      second = first
      first = nums[i]
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return (first - 1) * (second - 1)
}
// @lc code=end
var nums = [3, 4, 5, 2]
nums = [1, 5, 4, 5]
nums = [3, 7]
nums = [1, 7]

var res = maxProduct(nums)
console.log(res)
