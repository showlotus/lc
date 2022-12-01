/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minDistance = Number.MAX_SAFE_INTEGER
  let res = -1
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      const d = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      if (d < minDistance) {
        minDistance = d
        res = i
      }
    }
  }
  return res
}
// @lc code=end

let x = 3
let y = 4
let points = [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4]
]

x = 3
y = 4
points = [[3, 4]]

x = 3
y = 4
points = [[2, 3]]

let res = nearestValidPoint(x, y, points)
console.log(res)
