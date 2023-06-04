/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []
  for (const char of s) {
    if (!stack.length || (stack.length && stack[stack.length - 1] !== char)) {
      stack.push(char)
    } else {
      while (stack.length && stack[stack.length - 1] === char) {
        stack.pop()
      }
    }
  }
  return stack.join("")
}
// @lc code=end
let s = "abbaca"
s = "abaabcc"

const res = removeDuplicates(s)
console.log(res)
