/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let m = img.length
  let n = img[0].length
  let prefixSum = new Array(m).fill(0).map(() => new Array(n + 1).fill(0))
  img.forEach((row, rowIdx) => {
    row.forEach((v, colIdx) => {
      prefixSum[rowIdx][colIdx + 1] = prefixSum[rowIdx][colIdx] + v
    })
  })

  const getNineAverage = (i, j) => {
    let minRow = Math.max(0, i - 1)
    let maxRow = Math.min(m - 1, i + 1)
    let minCol = Math.max(0, j - 1)
    let maxCol = Math.min(n - 1, j + 1)
    let cnt = (maxRow - minRow + 1) * (maxCol - minCol + 1)
    let sum = 0
    for (let k = minRow; k <= maxRow; k++) {
      sum += prefixSum[k][maxCol + 1] - prefixSum[k][minCol]
    }
    // console.log(sum, cnt, i, j)
    return Math.floor(sum / cnt)
  }

  let res = new Array(m).fill(0).map(v => new Array(n).fill(v))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = getNineAverage(i, j)
    }
  }
  return res
}
// @lc code=end
var img = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
]
img = [[1, 2, 3]]

console.log(imageSmoother(img))
