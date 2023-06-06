/*
 * @lc app=leetcode.cn id=1328 lang=javascript
 *
 * [1328] 破坏回文串
 */

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  const n = palindrome.length
  if (n === 1) {
    return ""
  }
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (palindrome[i] !== "a") {
      return palindrome.slice(0, i) + "a" + palindrome.slice(i + 1)
    }
  }
  return palindrome.slice(0, n - 1) + "b"
}
// @lc code=end
let palindrome = "abccba"
palindrome = "aba"
palindrome = "aaa"
palindrome = "aaaabbaaaa"

const res = breakPalindrome(palindrome)
console.log(res)
