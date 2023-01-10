/*
 * @lc app=leetcode.cn id=2283 lang=javascript
 *
 * [2283] 判断一个数的数字计数是否等于数位的值
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const count = new Array(num.length).fill(0)
  for (const char of num) {
    count[char]++
  }

  for (let i = 0; i < num.length; i++) {
    if (+num[i] !== count[i]) {
      return false
    }
  }
  return true
}
// @lc code=end
let num = "1210"
num = "030"

const res = digitCount(num)
console.log(res)
