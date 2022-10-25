/*
 * @lc app=leetcode.cn id=934 lang=javascript
 *
 * [934] 最短的桥
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  const n = grid.length

  // 先找到第一块岛的起点
  let x = -1
  let y = -1
  let hasFindIsland = false
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        x = i
        y = j
        hasFindIsland = true
        break
      }
    }
    if (hasFindIsland) {
      break
    }
  }

  // 由第一块岛的起点开始深度度优先遍历
  // 并记录当前岛的区域
  grid[x][y] = -1
  const island = []
  const dfs = (x, y, grid) => {
    island.push([x, y])
    for (const dir of dirs) {
      const x1 = x + dir[0]
      const y1 = y + dir[1]
      if (x1 >= 0 && x1 < n && y1 >= 0 && y1 < n && grid[x1][y1] === 1) {
        grid[x1][y1] = -1
        dfs(x1, y1, grid)
      }
    }
  }
  dfs(x, y, grid)

  // 再广度优先遍历第一块岛的区域
  // 每遍历一层，层数加一
  let step = 0
  while (island.length) {
    const len = island.length
    for (let i = 0; i < len; i++) {
      const [x, y] = island.shift()
      for (const dir of dirs) {
        const x1 = x + dir[0]
        const y1 = y + dir[1]
        if (x1 >= 0 && x1 < n && y1 >= 0 && y1 < n) {
          if (grid[x1][y1] === 1) {
            return step
          } else if (grid[x1][y1] !== -1) {
            island.push([x1, y1])
            grid[x1][y1] = -1
          }
        }
      }
    }
    step++
  }
}
// @lc code=end
let grid = [
  [0, 1],
  [1, 0]
]
grid = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1]
]

grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

grid = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1]
]

let res = shortestBridge(grid)
console.log(res)
