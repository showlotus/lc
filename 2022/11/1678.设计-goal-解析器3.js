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
  let str = ""
  let innerStr = ""
  for (let i = 0; i < command.length; i++) {
    const s = command[i]
    if (s === "G") {
      str += "G"
    } else if (s === ")") {
      str += innerStr ? innerStr : "o"
      innerStr = ""
    } else if (s !== "(") {
      innerStr += s
    }
  }
  return str
}
// @lc code=end
let command = "G()(al)"
command = "G()()()()(al)"
command = "(al)G(al)()()G"
console.log(interpret(command))
