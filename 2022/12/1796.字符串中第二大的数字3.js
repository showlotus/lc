/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let firstMax = -1
  let secondMax = -1
  const isNumber = s => /\d/.test(s)
  for (const char of s) {
    if (isNumber(char)) {
      const n = +char
      if (n > firstMax) {
        secondMax = firstMax
        firstMax = n
      } else if (n !== firstMax && n > secondMax) {
        secondMax = n
      }
    }
  }
  return secondMax
}
// @lc code=end
let s = "dfa12321afd"
s = "vwkxfq9791769"
s = "ck077"
s = "abc1111"
s = "abc1122"

const res = secondHighest(s)
console.log(res)
