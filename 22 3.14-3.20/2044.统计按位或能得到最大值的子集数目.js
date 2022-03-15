/*
 * @lc app=leetcode.cn id=2044 lang=javascript
 *
 * [2044] 统计按位或能得到最大值的子集数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxOr = 0
  let cnt = 0
  let len = nums.length
  for (let i = 0; i < 1 << len; i++) {
    let orVal = 0
    for (let j = 0; j < len; j++) {
      if (((i >> j) & 1) === 1) {
        orVal |= nums[j]
      }
    }
    if (orVal > maxOr) {
      maxOr = orVal
      cnt = 1
    } else if (orVal === maxOr) {
      cnt++
    }
  }
  return cnt
}
// @lc code=end
var nums = [3, 2, 1, 5]

console.log(countMaxOrSubsets(nums))

console.log(1 << 2, 2 >> 1)
