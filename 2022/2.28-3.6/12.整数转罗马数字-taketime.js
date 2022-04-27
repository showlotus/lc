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
var intToRoman = function (num) {
  const roman = {
    1: "I",
    2: "II",
    3: "III",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  }

  const specialRoman = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  }

  const romanKey = Object.keys(roman).map(Number).reverse()
  const specialKey = Object.keys(specialRoman).map(Number)

  if (num <= 10) return roman[num] || specialRoman[num]
  let len = String(num).length - 1
  let base = 10 ** len
  let res = ""

  const group = n => {
    if (n === 0) return ""
    if (specialKey.includes(n)) {
      return specialRoman[n]
    }
    const maxKey = romanKey.find(v => v <= n)
    if (n % maxKey === 0) {
      if (maxKey === n) {
        return roman[maxKey]
      } else {
        return roman[maxKey].repeat(n / maxKey)
      }
    } else {
      return roman[maxKey] + group(n - maxKey)
    }
  }

  while (num > 0) {
    let a = Math.floor(num / base)
    let key = a * base
    res += group(key)
    num %= base
    base /= 10
  }
  return res
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
