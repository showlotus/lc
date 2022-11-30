/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return 2
    }
  }
  return 1
}
// @lc code=end

var s = "baabb"
s = "abb"
s = "ababa"
s = "abaaba"

console.log(removePalindromeSub(s))
