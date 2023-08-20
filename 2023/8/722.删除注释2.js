/*
 * @lc app=leetcode.cn id=722 lang=javascript
 *
 * [722] 删除注释
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  const str = source.join("\n").replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, "")
  return str.split("\n").filter(Boolean)
}
// @lc code=end

let source = [
  "/*Test program */",
  "int main()",
  "{ ",
  "  // variable declaration ",
  "int a, b, c;",
  "/* This is a test",
  "   multiline  ",
  "   comment for ",
  "   testing */",
  "a = b + c;",
  "}"
]
// source = ["a/*comment", "line", "more_comment*/b"]
// source = ["/*..*/"]

const res = removeComments(source)
console.log(res)
