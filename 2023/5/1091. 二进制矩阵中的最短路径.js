/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1
  // 8 个方向
  const dirs = [
    [-1, -1], // top left
    [-1, 0], // top
    [-1, 1], // top right
    [0, -1], // left
    [0, 1], // right
    [1, -1], // bottom left
    [1, 0], // bottom
    [1, 1] // bottom right
  ]
  const n = grid.length
  const dist = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
  dist[0][0] = 1
  const stack = [[0, 0]]
  while (stack.length) {
    const [i, j] = stack.shift()
    for (const [offsetX, offsetY] of dirs) {
      const nextX = i + offsetX
      const nextY = j + offsetY
      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === 0 &&
        dist[nextX][nextY] > dist[i][j] + 1
      ) {
        dist[nextX][nextY] = dist[i][j] + 1
        stack.push([nextX, nextY])
      }
    }
    if (dist[n - 1][n - 1] !== Infinity) {
      return dist[n - 1][n - 1]
    }
  }
  return -1
}

let grid = [
  [0, 1],
  [1, 0]
]

grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
]

grid = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
]

const res = shortestPathBinaryMatrix(grid)
console.log(res)
