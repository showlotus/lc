/*
 * @lc app=leetcode.cn id=1144 lang=javascript
 *
 * [1144] 递减元素使数组呈锯齿状
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  return Math.min(handler(nums, 0), handler(nums, 1))
}

function handler(nums, pos) {
  let res = 0
  for (let i = pos; i < nums.length; i += 2) {
    let a = 0
    if (i - 1 >= 0) {
      a = Math.max(a, nums[i] - nums[i - 1] + 1)
    }
    if (i + 1 < nums.length) {
      a = Math.max(a, nums[i] - nums[i + 1] + 1)
    }
    res += a
  }
  return res
}
// @lc code=end
let nums = [1, 2, 3]
nums = [9, 6, 1, 6, 2]
nums = [2, 7, 10, 9, 8, 9]

const res = movesToMakeZigzag(nums)
console.log(res)
