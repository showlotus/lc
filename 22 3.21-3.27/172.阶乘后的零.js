/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0
  while (n !== 0) {
    n = Math.floor(n / 5)
    res += n
  }
  return res
}
// @lc code=end
var n = 5
console.log(trailingZeroes(n))
