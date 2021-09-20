/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x < 0 ? -1 : 1
  x = Math.abs(x)
  // if (x > 2 ** 31 - 1) return 0
  let res = 0
  while (x > 0) {
    res = res * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return res > 2 ** 31 - 1 ? 0 : res * sign
}
// @lc code=end

let x = 1534236469

x = 1563847412

console.log(reverse(x))
