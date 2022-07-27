/*
 * @lc app=leetcode.cn id=592 lang=javascript
 *
 * [592] 分数加减运算
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let res = new Fraction({ numerator: 0, denominator: 1 })
  const isOperator = s => /[-+]/.test(s)
  for (let i = 0, len = expression.length; i < len; ) {
    let j = i + 1
    while (!isOperator(expression[j]) && j < len) {
      j++
    }

    const num = expression.slice(i === 0 ? i : i - 1, j)
    const curr = new Fraction(num)
    res = Fraction.computed(res, curr)
    i = j + 1
  }

  if (res.numerator === 0) {
    return `0/1`
  } else {
    const g = gcd(Math.abs(res.numerator), Math.abs(res.denominator))
    res.numerator /= g
    res.denominator /= g
    return `${res.numerator}/${res.denominator}`
  }
}

class Fraction {
  constructor(obj) {
    if (typeof obj === "string") {
      const s = obj.split("/")
      this.numerator = parseInt(s[0])
      this.denominator = parseInt(s[1])
    } else if (typeof obj === "object") {
      this.numerator = obj.numerator
      this.denominator = obj.denominator
    }
  }

  static computed(f1, f2) {
    const numerator =
      f1.numerator * f2.denominator + f2.numerator * f1.denominator
    const denominator = f1.denominator * f2.denominator
    return new Fraction({ numerator, denominator })
  }
}

// 最大公约数
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

// @lc code=end
var expression = "-1/2+1/2"
expression = "-1/2+1/2+1/3"
expression = "1/3-1/2+1/19"

var res = fractionAddition(expression)
console.log(res)
