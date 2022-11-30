/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const dirs = [
    [-1, 1], // 右上
    [1, -1] // 左下
  ]

  const m = mat.length
  const n = mat[0].length
  const totals = m * n
  const res = []
  let i = 0
  let row = 0
  let col = 0
  let currDir = 0
  while (i < totals) {
    if (row >= 0 && row < m && col >= 0 && col < n) {
      res.push(mat[row][col])
      row += dirs[currDir][0]
      col += dirs[currDir][1]
      i++
    } else {
      row -= dirs[currDir][0]
      col -= dirs[currDir][1]
      if (currDir === 0) {
        if (col + 1 < n) {
          col += 1
        } else {
          row += 1
        }
        currDir = 1
      } else {
        if (row + 1 < m) {
          row += 1
        } else {
          col += 1
        }
        currDir = 0
      }
    }
  }
  return res
}
// @lc code=end
var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

mat = [
  [1, 2],
  [3, 4]
]

mat = [[1]]

console.log(findDiagonalOrder(mat))
