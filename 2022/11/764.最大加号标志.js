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
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  const grid = new Array(n).fill(0).map(() => new Array(n).fill(1))
  mines.forEach(([x, y]) => {
    grid[x][y] = 0
  })
  let res = 0
  const handler = (x, y, n, grid) => {
    const stack = dirs.map(([offsetX, offsetY]) => [x + offsetX, y + offsetY])
    let k = 1
    while (true) {
      for (let i = 0; i < 4; i++) {
        const [x1, y1] = stack[i]
        if (x1 < 0 || x1 >= n || y1 < 0 || y1 >= n || grid[x1][y1] === 0) {
          return k
        }
        stack[i] = [x1 + dirs[i][0], y1 + dirs[i][1]]
      }
      k++
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, handler(i, j, n, grid))
      }
    }
  }
  return res
}
// @lc code=end
let n = 5
let mines = [[4, 2]]

n = 1
mines = [[0, 0]]

n = 5
mines = [[4, 3]]

let res = orderOfLargestPlusSign(n, mines)
console.log(res)
