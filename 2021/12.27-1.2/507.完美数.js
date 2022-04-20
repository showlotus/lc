/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 0
  for (let i = 1; i * i < num; i++) {
    if (i === 1) {
      sum = 1
      continue
    }
    if (num % i === 0) {
      sum += i + num / i
    }
  }
  return sum === num
}
// @lc code=end

var num = 6
num = 28
num = 1
num = 496
num = 8128
num = 2
console.log(checkPerfectNumber(num))
