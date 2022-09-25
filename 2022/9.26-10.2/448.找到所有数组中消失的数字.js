/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const s = Math.abs(nums[i])
    if (nums[s - 1] > 0) {
      nums[s - 1] = -nums[s - 1]
    }
  }
  const res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }
  return res
}
// @lc code=end
let nums = [4, 3, 2, 7, 8, 2, 3, 1]
nums = [1, 2]
let res = findDisappearedNumbers(nums)
console.log(res)
