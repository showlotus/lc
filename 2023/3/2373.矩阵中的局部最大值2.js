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
  for (let i = 0; i < m; i++) {
    const queue = []
    for (let j = 0; j < n; j++) {
      while (queue.length && grid[i][j] >= grid[i][queue[queue.length - 1]]) {
        queue.pop()
      }
      queue.push(j)
      if (j >= 2) {
        for (let k = i - 2; k <= i; k++) {
          if (k >= 0 && k < n - 2) {
            res[k][j - 2] = Math.max(res[k][j - 2], grid[i][queue[0]])
          }
        }
        if (queue[0] <= j - 2) {
          queue.shift()
        }
      }
    }
  }
  return res
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
