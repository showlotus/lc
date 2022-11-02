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
  // 记录当前已有的信号塔
  const map = new Set(towers.map(t => `${t[0]},${t[1]}`))
  let n = towers.length
  const midTowers = []
  // 取两个信号塔的中点
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const midX = (towers[i][0] + towers[j][0]) / 2
      const midY = (towers[i][1] + towers[j][1]) / 2
      if (Number.isInteger(midX) && Number.isInteger(midY)) {
        const key = `${midX},${midY}`
        if (!map.has(key)) {
          map.add(key)
          midTowers.push([midX, midY, 0])
        }
      }
    }
  }
  towers = towers.concat(midTowers)
  towers.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  n = towers.length
  const res = new Array(n).fill(0)
  let max = 0
  let maxIdx = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const distance = getDistance(
        towers[i][0],
        towers[i][1],
        towers[j][0],
        towers[j][1]
      )
      if (distance <= radius) {
        res[i] += Math.floor(towers[j][2] / (1 + distance))
      }
    }
    if (res[i] > max) {
      max = res[i]
      maxIdx = i
    }
  }
  return max > 0 ? towers[maxIdx].slice(0, 2) : [0, 0]
}

// @lc code=end
let towers = [
    [1, 2, 5],
    [2, 1, 7],
    [3, 1, 9]
  ],
  radius = 2
;(towers = [[23, 11, 21]]), (radius = 9)
;(towers = [
  [1, 2, 13],
  [2, 1, 7],
  [0, 1, 9]
]),
  (radius = 2)
;(towers = [[42, 0, 0]]), (radius = 7)
;(towers = [
  [40, 41, 12],
  [18, 5, 2]
]),
  (radius = 35)
// ;(towers = [
//   [0, 1, 2],
//   [2, 1, 2],
//   [1, 0, 2],
//   [1, 2, 2]
// ]),
//   (radius = 1)
let res = bestCoordinate(towers, radius)
console.log(res)
