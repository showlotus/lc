/*
 * @lc app=leetcode.cn id=1752 lang=javascript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length
  if (n < 3) return true
  if (nums[0] >= nums[n - 1]) {
    let i = 0
    while (i < n - 1 && nums[i] <= nums[i + 1]) {
      ++i
    }
    if (i === n - 1) {
      return true
    }
    ++i
    while (i < n - 1 && nums[i] <= nums[i + 1]) {
      ++i
    }
    return i === n - 1
  } else {
    let i = 0
    while (i < n - 1 && nums[i] <= nums[i + 1]) {
      ++i
    }
    return i === n - 1
  }
}
// @lc code=end
let nums = [3, 4, 5, 1, 2]
nums = [2, 1, 3, 4]
nums = [2, 1, 2, 3]
nums = [2, 1]
nums = [2]
nums = [2, 2, 2]
let res = check(nums)
console.log(res)
