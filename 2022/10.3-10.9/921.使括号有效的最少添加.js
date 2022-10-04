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
  const stack = []
  let res = 0
  for (const char of s) {
    if (char === ")") {
      if (stack.length) {
        stack.pop()
      } else {
        res++
      }
    } else {
      stack.push("(")
    }
  }
  return stack.length + res
}
// @lc code=end
let s = "())"
s = "((("
s = "()"
let res = minAddToMakeValid(s)
console.log(res)
