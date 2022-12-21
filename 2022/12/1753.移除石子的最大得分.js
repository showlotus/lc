/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  const max = Math.max(a, b, c)
  const minSum = a + b + c - max
  if (minSum <= max) {
    return minSum
  } else {
    return Math.floor((a + b + c) / 2)
  }
}
// @lc code=end
let a = 2
let b = 4
let c = 6

a = 4
b = 4
c = 6

const res = maximumScore(a, b, c)
console.log(res)
