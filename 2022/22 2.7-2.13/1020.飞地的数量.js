/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length
  const n = grid[0].length
  if (m * n <= 4) return 0
  let visited = new Array(m).fill(false).map(v => Array.from({ length: n }).fill(v))
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]

  const dfs = (grid, x, y) => {
    const m = grid.length
    const n = grid[0].length
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0 || visited[x][y]) return
    // console.log(`[${ x }, ${ y }]: ${ grid[x][y] }`)
    visited[x][y] = true
    for (let dir of dirs) {
      dfs(grid, x + dir[0], y + dir[1])
    }
  }

  const edges = (m + n - 2) * 2
  for (let j = 0; j < edges; j++) {
    let x = 0
    let y = 0
    if (j < n) {
      // 第一行
      y = j
    } else {
      if (j <= m + n - 2) {
        // 最后一列
        x = j - n + 1
        y = n - 1
      } else if (j <= m + n * 2 - 3) {
        // 最后一行
        x = m - 1
        y = m + 2 * n - j - 3
      } else {
        // 第一列
        x = edges - j
        y = 0
      }
    }
    if (grid[x][y] === 1) {
      dfs(grid, x, y)
    }
  }

  let res = 0
  grid.forEach((row, i) => {
    row.forEach((r, j) => {
      if (!visited[i][j] && r === 1) {
        ++res
        // console.log(i, j, grid[i][j], visited[i][j])
      }
    })
  })
  return res
}

// @lc code=end
var grid = [
  [0, 1, 2, 3],
  [11, 0, 1, 4],
  [10, 1, 1, 5],
  [9, 8, 7, 6],
]

grid = [
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]

grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]

grid = [
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
]

grid = [
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
]

console.log(numEnclaves(grid))

// dfs(grid, 0, 1)
