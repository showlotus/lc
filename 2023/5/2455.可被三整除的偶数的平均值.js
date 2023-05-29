/*
 * @lc app=leetcode.cn id=2455 lang=javascript
 *
 * [2455] 可被三整除的偶数的平均值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  // 能被 3 整除的偶数，等价于能被 6 整除
  let n = 0
  let sum = 0
  for (const s of nums) {
    if (s % 6 === 0) {
      sum += s
      n++
    }
  }
  return n === 0 ? 0 : Math.floor(sum / n)
}
// @lc code=end
let nums = [1, 3, 6, 10, 12, 15]
nums = [1, 2, 4, 7, 10]

const res = averageValue(nums)
console.log(res)
