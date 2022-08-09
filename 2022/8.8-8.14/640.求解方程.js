/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const expressions = equation.split("=")
  const [leftX, leftValue] = parseXAndValue(expressions[0])
  const [rightX, rightValue] = parseXAndValue(expressions[1])

  if (leftX === rightX) {
    if (leftValue === rightValue) {
      return "Infinite solutions"
    } else {
      return "No solution"
    }
  }

  return `x=${(rightValue - leftValue) / (leftX - rightX)}`
}

function parseXAndValue(str) {
  const patternX = /[+\-]?(|\d?|\d+)x/g
  const patternNumber = /[+\-]?\d+((?=[+\-])|$)/g

  let x = 0
  let value = 0
  const xArgs = str.match(patternX)
  if (xArgs) {
    for (const s of xArgs) {
      const v = s.replace(/^x|([+\-])x/, "$11").replace("x", "")
      x += Number(v)
    }
  }

  const valueArgs = str.match(patternNumber)
  if (valueArgs) {
    for (const s of valueArgs) {
      value += Number(s)
    }
  }

  return [x, value]
}
// @lc code=end

var equation = "x-1x+15-3+23x-3x+2-2x+x=6+x-2"

equation = "x+5-3+x=6+x-2"
// equation = "x=x"
equation = "2x=x"
equation = "x=x+2"

var res = solveEquation(equation)

console.log(res)
