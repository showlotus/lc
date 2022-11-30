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
  let res = 0
  let depth = 0
  for (let i = 0; i < s.length; i++) {
    depth += s[i] === "(" ? 1 : -1
    if (s[i] === ")" && s[i - 1] === "(") {
      res += 1 << depth
    }
  }
  return res
}
// @lc code=end

let s = "()"
s = "(())"
s = "()()"
s = "(()(()))"
s = "(()())"
let res = scoreOfParentheses(s)
console.log(res)
