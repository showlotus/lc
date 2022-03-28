/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let prevLast = -1
  while (n > 0) {
    let last = n & 1
    if (last === prevLast) return false
    prevLast = last
    n = n >> 1
  }
  return true
}
// @lc code=end

var n = 5
n = 1123123
console.log(hasAlternatingBits(n))
