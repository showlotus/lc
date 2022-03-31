/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const isSelfDivide = n => {
  if (n < 10) return true
  let m = n
  while (m > 0) {
    let last = m % 10
    if (n % last === 0) {
      m = Math.floor(m / 10)
    } else {
      return false
    }
  }
  return true
}
var selfDividingNumbers = function (left, right) {
  let res = []
  while (left <= right) {
    if (isSelfDivide(left)) {
      res.push(left)
    }
    ++left
  }
  return res
}
// @lc code=end
var left = 1,
  right = 22
;(left = 47), (right = 85)
console.log(selfDividingNumbers(left, right))
