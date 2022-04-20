/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0
  let firstMax = nums[0],
    secondMax = -1,
    res = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    if (i === 0) continue
    const t = nums[i]
    if (t > firstMax) {
      secondMax = firstMax
      firstMax = t
      res = i
    } else if (t > secondMax) {
      secondMax = t
    }
  }
  return firstMax >= secondMax * 2 ? res : -1
}
// @lc code=end

var nums = [3, 6, 1, 0]
nums = [1]
nums = [1, 2, 3, 4]
nums = [4, 6, 9, 10, 21]
nums = [1, 0]
console.log(dominantIndex(nums))
