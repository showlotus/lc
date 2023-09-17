/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  const n = nums.length
  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  let res = second
  for (let i = 2; i < n; i++) {
    res = Math.max(first + nums[i], second)
    first = second
    second = res
  }
  return res
}
// @lc code=end
let nums = [1, 2, 3, 1]
// nums = [2, 7, 9, 3, 1]

// nums = [1, 2, 3]

const res = rob(nums)
console.log(res)
