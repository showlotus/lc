/*
 * @lc app=leetcode.cn id=1003 lang=javascript
 *
 * [1003] 检查替换后的词是否有效
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 3 !== 0 || s.length < 3) return false
  const stack = []
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])

    if (
      stack.length >= 3 &&
      stack[stack.length - 1] === "c" &&
      stack[stack.length - 2] === "b" &&
      stack[stack.length - 3] === "a"
    ) {
      stack.splice(stack.length - 3, 3)
    }
  }
  return !stack.length
}
// @lc code=end
let s = "aabcbc"
// s = "aabbcc"
// s = "abccba"
// s = "abcabcababcc"

const res = isValid(s)
console.log(res)
