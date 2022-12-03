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
  const map = {}
  const isNumber = s => /\d/.test(s)
  for (const char of s) {
    if (isNumber(char) && !map[char]) {
      map[char] = 1
    }
  }
  const keys = Object.keys(map)
  return keys.length >= 2 ? +keys[keys.length - 2] : -1
}
// @lc code=end
let s = "dfa12321afd"
s = "abc1111"
s = "abc1123"
// s = "ck077"

const res = secondHighest(s)
console.log(res)
