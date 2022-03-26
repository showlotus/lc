/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let points = []
  const option = {
    C: arr => arr.pop(),
    D: arr => arr.push(arr[arr.length - 1] * 2),
    "+": arr => arr.push(arr[arr.length - 2] + arr[arr.length - 1]),
  }
  ops.forEach(o => {
    if (/\d+/.test(o)) {
      points.push(+o)
    } else {
      option[o](points)
    }
  })
  const sum = (prev, curr) => prev + curr
  return points.reduce(sum, 0)
}
// @lc code=end
var ops = ["5", "2", "C", "D", "+"]
ops = ["5", "-2", "4", "C", "D", "9", "+", "+"]
console.log(calPoints(ops))
