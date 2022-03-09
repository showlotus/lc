/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const roman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
}
var intToRoman = function (num) {
  let res = ""
  const romanKey = Object.keys(roman).map(Number).reverse()
  for (let key of romanKey) {
    while (num >= key) {
      num -= key
      res += roman[key]
    }
    if (num === 0) {
      return res
    }
  }
}
// @lc code=end
var num = 58
num = 3458
num = 3999
// num = 1994
// num = 27
num = 20
num = 19
num = 60
num = 160
num = 660
num = 3140
num = 4
num = 1101
console.log(intToRoman(num))
