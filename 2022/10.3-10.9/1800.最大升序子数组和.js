/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let res = 0
  const n = nums.length
  for (let i = 0; i < n; i++) {
    let sum = nums[i]
    while (i + 1 < n && nums[i] < nums[i + 1]) {
      sum += nums[i + 1]
      i++
    }
    res = Math.max(res, sum)
  }
  return res
}
// @lc code=end
let nums = [10, 20, 30, 5, 10, 50]
nums = [20]
nums = [10, 20, 30, 40, 50]
nums = [12, 17, 15, 13, 10, 11, 12]
nums = [100, 10, 1]
nums = [1000, 900]
let res = maxAscendingSum(nums)
console.log(res)
