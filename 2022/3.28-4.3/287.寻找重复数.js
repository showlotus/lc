/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 1
  let right = nums.length - 1
  while (left < right) {
    let mid = (left + right) >> 1
    let cnt = 0
    nums.forEach(v => {
      cnt += v <= mid ? 1 : 0
    })
    if (cnt <= mid) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
// @lc code=end
var nums = [1, 3, 4, 2, 2]
nums = [3, 1, 3, 4, 2]

console.log(findDuplicate(nums))
