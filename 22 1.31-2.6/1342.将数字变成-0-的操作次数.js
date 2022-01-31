/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let cnt = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
    cnt++
  }
  return cnt
}
// @lc code=end
var num = 14
var num = 2
num = 123
console.log(numberOfSteps(num))
