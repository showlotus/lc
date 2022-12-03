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
  const arr = new Array(10).fill(0)
  const isNumber = s => /\d/.test(s)
  for (const char of s) {
    if (isNumber(char) && !arr[char]) {
      arr[char]++
    }
  }
  let order = 0
  for (let i = 9; i >= 0; i--) {
    if (arr[i] > 0) {
      order++
    }
    if (order === 2) {
      return i
    }
  }
  return -1
}
// @lc code=end
let s = "dfa12321afd"
s = "abc1111"
s = "abc1123"
// s = "ck077"
s = "vwkxfq9791769"

const res = secondHighest(s)
console.log(res)
