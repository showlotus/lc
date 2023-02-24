/*
 * @lc app=leetcode.cn id=2357 lang=javascript
 *
 * [2357] 使数组中所有元素都等于零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  while (nums[nums.length - 1] !== 0) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
      if (!x && nums[i] > 0) {
        x = nums[i]
      }
      if (nums[i] > 0) {
        nums[i] -= x
      }
    }
    res++
  }
  return res
}
// @lc code=end
let nums = [1, 5, 0, 3, 5]
nums = [0]
nums = [1]

const res = minimumOperations(nums)
console.log(res)
