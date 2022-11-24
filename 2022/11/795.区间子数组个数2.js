/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let res = 0
  let last1 = -1
  let last2 = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i
    } else if (nums[i] > right) {
      last1 = -1
      last2 = i
    }
    if (last1 !== -1) {
      res += last1 - last2
    }
  }
  return res
}
// @lc code=end
let nums = [2, 1, 4, 3]
let left = 2
let right = 3

nums = [2, 9, 2, 5, 6]
left = 2
right = 8

nums = [73, 55, 36, 5, 55, 14, 9, 7, 72, 52]
left = 32
right = 69

let res = numSubarrayBoundedMax(nums, left, right)
console.log(res)
