/*
 * @lc app=leetcode.cn id=1763 lang=javascript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  let len = s.length
  let maxLen = 0
  let maxPos = 0
  for (let i = 0; i < len; i++) {
    let lower = 0
    let upper = 0
    for (let j = i; j < len; j++) {
      if (s[j].match(/[a-z]/)) {
        lower |= 1 << (s[j].charCodeAt() - "a".charCodeAt())
      } else {
        upper |= 1 << (s[j].charCodeAt() - "A".charCodeAt())
      }
      if (lower === upper && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        maxPos = i
      }
    }
  }
  return s.substr(maxPos, maxLen)
}
// @lc code=end
var s = "dDzeE"

console.log(longestNiceSubstring(s))
