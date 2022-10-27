/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let s = 1
  for (const num of nums) {
    const curr = s * num
    if (curr === 0) {
      return 0
    } else if (curr > 0) {
      s = 1
    } else {
      s = -1
    }
  }
  return s
}
// @lc code=end
let nums = [-1, -2, -3, -4, 3, 2, 1]
nums = [1, 5, 0, 2, -3]
nums = [-1, 1, -1, 1, -1]
let res = arraySign(nums)

console.log(res)
