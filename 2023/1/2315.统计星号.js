/*
 * @lc app=leetcode.cn id=2315 lang=javascript
 *
 * [2315] 统计星号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let flag = false
  let res = 0
  for (const char of s) {
    if (char === "|") {
      flag = !flag
    }
    if (!flag && char === "*") {
      res++
    }
  }
  return res
}
// @lc code=end
let s = "l|*e*et|c**o|*de|"
s = "iamprogrammer"
s = "yo|uar|e**|b|e***au|tifu|l"

const res = countAsterisks(s)
console.log(res)
