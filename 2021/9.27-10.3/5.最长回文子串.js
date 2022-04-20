/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length
  if (len < 2) return s

  let dp = new Array(len).fill(0).map(() => Array.from({ length: len }).fill(false))
  let maxLen = 1
  let startIndex = 0

  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= i; j--) {
      if (i === j) {
        dp[i][j] = true
        continue
      }
      if (s[i] === s[j]) {
        dp[i][j] = i + 1 <= j - 1 ? dp[i + 1][j - 1] : true
      } else {
        dp[i][j] = false
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        startIndex = i
        maxLen = j - i + 1
      }
    }
  }
  return s.substr(startIndex, maxLen)
}
// @lc code=end

var s = "cbbd"

s = "abcddcba"

s = "a"
// s = "aa"
// s = "aba"
s = "babad"
s = "ac"
console.log(longestPalindrome(s))
