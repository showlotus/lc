/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const isNumber = s => /-?\d+/.test(s)
  const calc = (operator, n1, n2) => {
    const ops = {
      "*": () => n1 * n2,
      "/": () => (n1 / n2) | 0,
      "+": () => n1 + n2,
      "-": () => n1 - n2
    }
    return ops[operator]()
  }

  const numbers = []
  for (const s of tokens) {
    if (isNumber(s)) {
      numbers.push(Number(s))
    } else {
      const n2 = numbers.pop()
      const n1 = numbers.pop()
      numbers.push(calc(s, n1, n2))
    }
  }

  return numbers[0]
}
// @lc code=end
let tokens = ["2", "1", "+", "3", "*"] // 9
tokens = ["4", "13", "5", "/", "+"] // 6
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] // 22

const res = evalRPN(tokens)
console.log(res)
