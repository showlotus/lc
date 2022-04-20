/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
const isPalindromicNum = n => {
  if (n < 0) return false
  let len = 0
  let _n = n
  while (_n > 9) {
    len++
    _n = Math.floor(_n / 10)
  }
  while (n > 9) {
    let first = Math.floor(n / 10 ** len)
    let last = n % 10
    if (first !== last) return false
    n = Math.floor(n / 10) // remove the last num
    n %= 10 ** --len // remove the first num
    --len
    if (n !== 0 && n < len * 10) return false
  }
  return true
}
var nearestPalindromic = function (n) {
  n = parseInt(n)
  let i = n - 1
  let j = n + 1
  let hasFind = false
  while (true) {
    hasFind = i >= 0 && isPalindromicNum(i)
    if (isPalindromicNum(j)) {
      if (hasFind) return Math.min(i, j) + ""
      return j + ""
    }
    if (hasFind) return i + ""
    --i
    ++j
  }
}
// @lc code=end
var n = "123"
n = "1"
n = "1011"
n = "100"
n = "1325060231"
console.log(nearestPalindromic(n))
// console.log(isPalindromicNum(1325060231))
// console.log(isPalindromicNum(1325055231))
console.log(isPalindromicNum(1325100015231))
