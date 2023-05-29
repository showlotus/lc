/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dirs = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // bottom
    [0, -1] // left
  ]
  let res = 0
  const m = grid.length
  const n = grid[0].length
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))

  const dfs = (i, j) => {
    visited[i][j] = true
    for (const [offsetX, offsetY] of dirs) {
      const nextX = i + offsetX
      const nextY = j + offsetY
      if (
        nextX >= 0 &&
        nextX < m &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === "1" &&
        !visited[nextX][nextY]
      ) {
        dfs(nextX, nextY)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        dfs(i, j)
        res++
      }
    }
  }

  return res
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]

const res = numIslands(grid)
console.log(res)
