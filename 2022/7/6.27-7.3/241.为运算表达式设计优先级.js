/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  if (/^\d+$/.test(expression)) {
    return [Number(expression)]
  }

  const res = []
  for (let i = 0, len = expression.length; i < len; ++i) {
    const char = expression[i]
    if (["+", "-", "*"].includes(char)) {
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1))

      for (const l of left) {
        for (const r of right) {
          if (char === "+") {
            res.push(l + r)
          } else if (char === "-") {
            res.push(l - r)
          } else {
            res.push(l * r)
          }
        }
      }
    }
  }
  return res
}
// @lc code=end
var expression = "2*3-4*5"
expression = "2-1-1"
var res = diffWaysToCompute(expression)
console.log(res)
