/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  if (m * n === 1) return matrix[0]
  let res = []
  for (let row of matrix) {
    let min = Number.MAX_SAFE_INTEGER
    let minIndex = -1
    // 行最小值
    for (let [i, num] of row.entries()) {
      if (num < min) {
        ;[minIndex, min] = [i, num]
      }
    }

    // 列最大值
    let isRowMax = true
    for (let i = 0; i < m; ++i) {
      if (matrix[i][minIndex] > min) {
        isRowMax = false
        break
      }
    }

    if (isRowMax) {
      res.push(min)
    }
  }
  return res
}
// @lc code=end
var matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
]

matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
]

matrix = [
  [7, 8],
  [1, 2],
]

matrix = [[1]]

console.log(luckyNumbers(matrix))
