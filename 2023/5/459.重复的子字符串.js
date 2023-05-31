/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    if (n % i !== 0) {
      continue
    }
    if (s.slice(0, i).repeat(n / i) === s) {
      return true
    }
  }
  return false
}
// @lc code=end
let s = "abab"
s = "aba"
s = "abcabcabcabc"

const res = repeatedSubstringPattern(s)
console.log(res)
