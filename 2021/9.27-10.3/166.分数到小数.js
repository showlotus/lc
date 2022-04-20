/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return "0"
  // 符号位
  let sign = Object.is(numerator % 1, denominator % 1) ? "" : "-"

  // 整数部分
  // 求商，若不能整除，则在结果字符串【简称：res】后加【.】
  let res =
    sign +
    Math.floor(Math.abs(numerator / denominator)) +
    (numerator % denominator === 0 ? "" : ".")

  numerator = Math.abs(numerator % denominator)
  denominator = Math.abs(denominator)

  let map = new Map()

  // 小数点后的字符串
  let afterPointStr = ""

  let index = 0
  // 余数不为0，一直求下去，或直至有循环节出现
  while (numerator !== 0 && !map.has(numerator)) {
    map.set(numerator, index)
    numerator *= 10
    afterPointStr += Math.floor(numerator / denominator)
    numerator %= denominator
    index++
  }

  // 有循环节
  if (numerator !== 0) {
    let startIndex = map.get(numerator)
    afterPointStr = afterPointStr.slice(0, startIndex) + "(" + afterPointStr.slice(startIndex) + ")"
  }
  return res + afterPointStr
}
// @lc code=end

let numerator = 2,
  denominator = 3

;(numerator = 1), (denominator = 3)
// ;(numerator = 2), (denominator = 3)
// ;(numerator = 9), (denominator = 7)
// ;(numerator = 9), (denominator = 9)
// ;(numerator = 4), (denominator = 333)
;(numerator = 1), (denominator = 2)
;(numerator = 1), (denominator = 6) // 0.1(6)
// ;(numerator = 9999), (denominator = 7) // 1428.(428571)
// ;(numerator = -50), (denominator = 8) // 6.25
// ;(numerator = 1), (denominator = 2)
// ;(numerator = 7), (denominator = -12) // 0.58(3)
;(numerator = 1), (denominator = 222) // 0.(003)
;(numerator = 1), (denominator = 90) // 0.0(1)
;(numerator = 1), (denominator = 17) // 0.(0588235294117647)
// ;(numerator = 1), (denominator = 2002) // 0.(0004995)
;(numerator = 1), (denominator = 900) // 0.00(1)
;(numerator = 1), (denominator = 3003) // 0.(000333)
;(numerator = 1), (denominator = 333) // 0.(003)
;(numerator = 89), (denominator = 270) // 0.3(296)
;(numerator = -22), (denominator = -2) // 0.3(296)

console.log(fractionToDecimal(numerator, denominator))
