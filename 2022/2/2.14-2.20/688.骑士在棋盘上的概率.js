/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] 骑士在棋盘上的概率
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const dir = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
  ]
  let dp = new Array(k + 1)
    .fill(0)
    .map(v => new Array(n).fill(v).map(v => Array.from({ length: n }).fill(v)))
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      dp[0][i][j] = 1
    }
  }
  let step = 1
  while (step <= k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        let sum = 0
        for (let [offsetX, offsetY] of dir) {
          let x = i + offsetX
          let y = j + offsetY
          if (x < 0 || x >= n || y < 0 || y >= n) continue
          sum += dp[step - 1][x][y]
        }
        dp[step][i][j] = sum / 8
      }
    }
    step++
  }
  return dp[k][row][column]
}
// @lc code=end

var n = 3,
  k = 2,
  row = 0,
  column = 0
;(n = 1), (k = 0), (row = 0), (column = 0)
;(n = 5), (k = 10), (row = 0), (column = 0)
console.log(knightProbability(n, k, row, column))
