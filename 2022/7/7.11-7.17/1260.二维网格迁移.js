/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const totals = m * n
  k = k % totals
  if (k === 0) return grid

  const newGrid = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const newNum = (i * n + j + k) % totals
      const newRow = Math.floor(newNum / n)
      const newCol = newNum % n
      newGrid[newRow][newCol] = grid[i][j]
    }
  }

  return newGrid
}
// @lc code=end
var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var k = 1

grid = [
  [3, 8, 1, 9],
  [19, 7, 2, 5],
  [4, 6, 11, 10],
  [12, 0, 21, 13]
]
k = 4

// grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// k = 0

// grid = [
//   [1, 2, 3]
// [6, 7, 8, 9, 10]
// ]

var res = shiftGrid(grid, k)

console.log(res)
