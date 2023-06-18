/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const dirs = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1] // right
  ]
  const m = grid.length
  const n = grid[0].length

  const dfs = (i, j) => {
    grid[i][j] = -1
    for (const [offsetX, offsetY] of dirs) {
      const nextX = i + offsetX
      const nextY = j + offsetY
      if (
        nextX >= 0 &&
        nextX < m &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === 0
      ) {
        dfs(nextX, nextY)
      }
    }
  }

  let res = 0
  // 先处理边界的土地
  // 上边界
  for (let i = 0; i < n; i++) {
    if (grid[0][i] === 0) {
      dfs(0, i)
    }
  }
  // 下边界
  for (let i = 0; i < n; i++) {
    if (grid[m - 1][i] === 0) {
      dfs(m - 1, i)
    }
  }
  // 左边界
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      dfs(i, 0)
    }
  }
  // 右边界
  for (let i = 0; i < m; i++) {
    if (grid[i][n - 1] === 0) {
      dfs(i, n - 1)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        res++
        dfs(i, j)
      }
    }
  }
  return res
}
// @lc code=end

let grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0]
]

grid = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0]
]

grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
]

grid = [
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
]

const res = closedIsland(grid)
console.log(res)
