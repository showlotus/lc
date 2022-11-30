/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
class Plural {
  constructor(...args) {
    if (args.length === 1 && typeof args[0] === "string") {
      this.real = Number(args[0].match(/-?\d+(?=\+)/)[0])
      this.virtual = Number(args[0].match(/-?\d+(?=i)/)[0])
    } else if (args.length === 2 && args.every(v => typeof v === "number")) {
      this.real = args[0]
      this.virtual = args[1]
    }
  }

  static multiply(Plural1, Plural2) {
    const real = Plural1.real * Plural2.real - Plural1.virtual * Plural2.virtual
    const virtual = Plural1.real * Plural2.virtual + Plural1.virtual * Plural2.real
    return new Plural(real, virtual)
  }

  toString() {
    return `${this.real}+${this.virtual}i`
  }
}

var complexNumberMultiply = function (num1, num2) {
  const P1 = new Plural(num1)
  const P2 = new Plural(num2)
  const res = Plural.multiply(P1, P2)
  return res.toString()
}
// @lc code=end

var num1 = "1+1i",
  num2 = "1+1i"
;(num1 = "1+-1i"), (num2 = "1+-1i")
;(num1 = "78+-76i"), (num2 = "-86+72i")

console.log(complexNumberMultiply(num1, num2))
