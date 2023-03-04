/*
 * @lc app=leetcode.cn id=2373 lang=javascript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const res = new Array(m - 2).fill(0).map(() => new Array(n - 2).fill(0))
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      res[i][j] = getMax(grid, i, j)
    }
  }
  return res
}

const getMax = (matrix, i, j) => {
  let max = 0
  for (let i1 = i; i1 < i + 3; i1++) {
    for (let j1 = j; j1 < j + 3; j1++) {
      max = Math.max(max, matrix[i1][j1])
    }
  }
  return max
}
// @lc code=end

let grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2]
]

grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
]

const res = largestLocal(grid)
console.log(res)
