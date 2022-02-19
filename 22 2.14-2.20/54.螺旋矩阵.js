/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let curr_dir = 0
  let row = matrix.length
  let col = matrix[0].length
  let visited = new Array(row).fill(false).map(v => Array.from({ length: col }).fill(v))
  let res = []
  let curr_row = 0
  let curr_col = -1
  while (res.length !== row * col) {
    const [next_row, next_col] = [curr_row + dirs[curr_dir][0], curr_col + dirs[curr_dir][1]]
    if (
      next_row < 0 ||
      next_row >= row ||
      next_col < 0 ||
      next_col >= col ||
      visited[next_row][next_col]
    ) {
      curr_dir = (curr_dir + 1) % 4
      continue
    }
    visited[next_row][next_col] = true
    ;[curr_row, curr_col] = [next_row, next_col]
    res.push(matrix[curr_row][curr_col])
  }
  return res
}
// @lc code=end

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
matrix = [[1]]
console.log(spiralOrder(matrix))
