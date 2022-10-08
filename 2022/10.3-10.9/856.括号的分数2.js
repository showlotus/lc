/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const stack = [0]
  for (const char of s) {
    if (char === "(") {
      stack.push(0)
    } else {
      let top = stack.pop()
      let score = stack.pop() + Math.max(top * 2, 1)
      stack.push(score)
    }
  }
  return stack[0]
}
// @lc code=end

let s = "()"
s = "(())"
s = "()()"
s = "(()(()))"
s = "(()())"
let res = scoreOfParentheses(s)
console.log(res)
