/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length
  const firstIdx = binarySearch(nums, target, true)
  const lastIdx = binarySearch(nums, target, false) - 1
  if (
    firstIdx <= lastIdx &&
    nums[firstIdx] === target &&
    nums[lastIdx] === target
  ) {
    return [firstIdx, lastIdx]
  }
  return [-1, -1]
}

function binarySearch(nums, target, lower) {
  let left = 0,
    right = nums.length - 1,
    res = nums.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      res = mid
    } else {
      left = mid + 1
    }
  }
  return res
}
// @lc code=end
var nums = [5, 7, 7, 8, 8, 10],
  target = 9

var res = searchRange(nums, target)
console.log(res)
