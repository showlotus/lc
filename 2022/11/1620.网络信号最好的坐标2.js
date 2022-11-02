/*
 * @lc app=leetcode.cn id=1620 lang=javascript
 *
 * [1620] 网络信号最好的坐标
 */

// @lc code=start
/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }
  let xMax = 0
  let yMax = 0
  towers.forEach(([x, y]) => {
    xMax = Math.max(xMax, x)
    yMax = Math.max(yMax, y)
  })
  let max = 0
  let res = [0, 0]
  for (let i = 0; i <= xMax; i++) {
    for (let j = 0; j <= yMax; j++) {
      let s = 0
      towers.forEach(([x, y, q]) => {
        const d = getDistance(x, y, i, j)
        if (d <= radius) {
          s += Math.floor(q / (1 + d))
        }
      })
      if (s > max) {
        max = s
        res = [i, j]
      }
    }
  }
  return res
}

// @lc code=end
let towers = [
  [1, 2, 5],
  [2, 1, 7],
  [3, 1, 9]
]
let radius = 2

towers = [[23, 11, 21]]
radius = 9

towers = [
  [1, 2, 13],
  [2, 1, 7],
  [0, 1, 9]
]
radius = 2

// towers = [[42, 0, 0]]
// radius = 7

// towers = [
//   [40, 41, 12],
//   [18, 5, 2]
// ]
// radius = 35

// towers = [
//   [0, 1, 2],
//   [2, 1, 2],
//   [1, 0, 2],
//   [1, 2, 2]
// ]
// radius = 1
let res = bestCoordinate(towers, radius)
console.log(res)
