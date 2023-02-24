/*
 * @lc app=leetcode.cn id=1139 lang=javascript
 *
 * [1139] 最大的以 1 为边界的正方形
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const up = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  const left = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      up[i][j] = grid[i - 1][j - 1] === 0 ? 0 : up[i - 1][j] + 1
      left[i][j] = grid[i - 1][j - 1] === 0 ? 0 : left[i][j - 1] + 1
      let l = Math.min(up[i][j], left[i][j])
      while (l > 0) {
        if (left[i - l + 1][j] >= l && up[i][j - l + 1] >= l) {
          res = Math.max(res, l)
          break
        }
        l--
      }
    }
  }
  return res * res
}
// @lc code=end
let grid = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

grid = [[1, 1, 0, 0]]
grid = [
  [0, 1],
  [1, 1]
]

const res = largest1BorderedSquare(grid)
console.log(res)
