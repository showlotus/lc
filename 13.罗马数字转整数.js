/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}
var romanToInt = function (s) {
  let res = 0
  for (let i = 0, len = s.length; i < len; i++) {
    let t = roman[s.substr(i, 2)]
    if (t) {
      res += t
      i++
    } else {
      res += roman[s[i]]
    }
  }
  return res
}
// @lc code=end
var s = "LVIII"
s = "IX"
s = "IV"
s = "III"
s = "MCMXCIV"
s = "MIV"
console.log(romanToInt(s))
console.log("1".substr(0, 2))
