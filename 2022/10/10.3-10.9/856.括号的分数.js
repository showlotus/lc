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
  if (s.length === 2) {
    return 1
  }
  const n = s.length
  let score = 0
  let len = 0
  for (let i = 0; i < n; i++) {
    score += s[i] === "(" ? 1 : -1
    if (score === 0) {
      len = i + 1
      break
    }
  }
  if (len === n) {
    return 2 * scoreOfParentheses(s.slice(1, -1))
  } else {
    return (
      scoreOfParentheses(s.slice(0, len)) + scoreOfParentheses(s.slice(len))
    )
  }
}
// @lc code=end

let s = "()"
s = "(())"
s = "()()"
s = "(()(()))"
s = "(()())"
let res = scoreOfParentheses(s)
console.log(res)
