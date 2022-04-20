/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let stack = []
  let max = 0
  for (let t of s) {
    if (t === "(") {
      stack.push(t)
    }
    if (t === ")") {
      max = Math.max(stack.length, max)
      stack.pop()
    }
  }
  return max
}
// @lc code=end

var s = "1+(2*3)/(2-1)"
s = "(1)+((2))+(((3)))"
s = "1"
s = "(1+(2*3)+((8)/4))+1"
console.log(maxDepth(s))
