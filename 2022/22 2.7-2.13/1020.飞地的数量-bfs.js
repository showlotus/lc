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

  const queue = []
  for (let i = 0; i < m; ++i) {
    if (grid[i][0] === 1) {
      visited[i][0] = true
      queue.push([i, 0])
    }

    if (grid[i][n - 1] === 1) {
      visited[i][n - 1] = true
      queue.push([i, n - 1])
    }
  }

  for (let j = 1; j < n - 1; ++j) {
    if (grid[0][j] === 1) {
      visited[0][j] = true
      queue.push([0, j])
    }
    if (grid[m - 1][j] === 1) {
      visited[m - 1][j] = true
      queue.push([m - 1, j])
    }
  }

  while (queue.length) {
    const [currRow, currCol] = queue.shift()
    for (let dir of dirs) {
      let nextRow = currRow + dir[0]
      let nextCol = currCol + dir[1]
      if (
        nextRow >= 0 &&
        nextRow < m &&
        nextCol >= 0 &&
        nextCol < n &&
        grid[nextRow][nextCol] === 1 &&
        !visited[nextRow][nextCol]
      ) {
        visited[nextRow][nextCol] = true
        queue.push([nextRow, nextCol])
      }
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
