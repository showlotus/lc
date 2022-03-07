/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let reg = /^\s*[-+]?\d+/
  let num = s.match(reg)
  if (!num) return 0
  return Math.min(Math.max(Math.pow(-2, 31), parseInt(num[0])), Math.pow(2, 31) - 1)
}
// @lc code=end

var s = "42"

s = "   -+00042"
// s = "42-193 with words"
// s = "-1341341324132413253245132"
// s = "words and 987"

console.log(myAtoi(s))
