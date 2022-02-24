/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let res = new Array(n).fill(-1)
  for (let j = 0; j < n; ++j) {
    let curr_row = 0
    let curr_col = j
    while (curr_row < m && curr_col >= 0 && curr_col < n) {
      const dir = grid[curr_row][curr_col]
      let in_row_next_col = curr_col + dir // 相同行方向的下一列
      if (in_row_next_col < 0 || in_row_next_col >= n || dir !== grid[curr_row][in_row_next_col]) {
        break
      }
      curr_row++
      curr_col += dir
    }
    if (curr_row === m) {
      res[j] = curr_col
    }
  }
  return res
}
// @lc code=end

var grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
]

grid = [
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
]

// grid = [[-1]]
// grid = [[1], [1]]

console.log(findBall(grid))
