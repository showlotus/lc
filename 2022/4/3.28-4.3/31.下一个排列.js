/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  let i = len - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // i < 0，即整个数组为倒序
  if (i >= 0) {
    let j = len - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let l = i + 1
  let r = len - 1
  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}
// @lc code=end
var nums = [1, 2, 3]
nums = [1, 3, 2]
nums = [4, 3, 2]
nums = [1]
nums = [3, 2, 1]
nums = [1, 1, 5]
nums = [1, 2, 5]
nums = [1, 1, 1]
nextPermutation(nums)
console.log(nums)
