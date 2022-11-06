/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const stack = []
  let str = ""
  for (const s of command) {
    if (s === "G") {
      str += "G"
    } else if (s === ")") {
      let word = ""
      while (stack.length && stack[stack.length - 1] !== "(") {
        word = word + stack.pop()
      }
      stack.pop()
      if (word) {
        str += "al"
      } else {
        str += "o"
      }
    } else {
      stack.push(s)
    }
  }
  return str
}
// @lc code=end
let command = "G()(al)"
// command = "G()()()()(al)"
// command = "(al)G(al)()()G"
console.log(interpret(command))
