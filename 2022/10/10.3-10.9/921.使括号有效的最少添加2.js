/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let leftNums = 0
  let res = 0
  for (const char of s) {
    if (char === ")") {
      if (leftNums > 0) {
        leftNums--
      } else {
        res++
      }
    } else {
      leftNums++
    }
  }
  return leftNums + res
}
// @lc code=end
let s = "())"
s = "((("
s = "()"
let res = minAddToMakeValid(s)
console.log(res)
