/*
 * @lc app=leetcode.cn id=764 lang=javascript
 *
 * [764] 最大加号标志
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const grid = new Array(n).fill(0).map(() => new Array(n).fill(n))
  const banned = new Set(mines.map(([x, y]) => x * n + y))
  let res = 0
  for (let i = 0; i < n; i++) {
    // left
    let count = 0
    for (let j = 0; j < n; j++) {
      if (banned.has(i * n + j)) {
        grid[i][j] = 0
        count = 0
      } else {
        count++
      }
      grid[i][j] = Math.min(grid[i][j], count)
    }

    // right
    count = 0
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(i * n + j)) {
        grid[i][j] = 0
        count = 0
      } else {
        count++
      }
      grid[i][j] = Math.min(grid[i][j], count)
    }
  }

  for (let i = 0; i < n; i++) {
    // up
    let count = 0
    for (let j = 0; j < n; j++) {
      if (banned.has(j * n + i)) {
        grid[i][j] = 0
        count = 0
      } else {
        count++
      }
      grid[j][i] = Math.min(grid[j][i], count)
    }

    count = 0
    // down
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(j * n + i)) {
        grid[i][j] = 0
        count = 0
      } else {
        count++
      }
      grid[j][i] = Math.min(grid[j][i], count)
      res = Math.max(res, grid[j][i])
    }
  }
  return res
}
// @lc code=end
let n = 5
let mines = [[4, 2]]

// n = 1
// mines = [[0, 0]]

// n = 5
// mines = [[4, 3]]

let res = orderOfLargestPlusSign(n, mines)
console.log(res)
