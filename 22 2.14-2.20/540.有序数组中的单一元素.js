/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  /* 全数组二分 */
  if (nums.length === 1) return nums[0]
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let middle = (right + left) >> 1
    if (nums[middle] === nums[middle ^ 1]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return nums[left]
}
// @lc code=end
var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]
nums = [3, 3, 7, 7, 10, 11, 11]
nums = [3, 3, 7, 7, 10, 10, 11, 11, 12]
nums = [1, 1, 2, 3, 3]

var res = singleNonDuplicate(nums)

console.log(res)
