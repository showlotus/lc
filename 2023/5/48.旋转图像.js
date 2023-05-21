/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 水平翻转 + 主对角线翻转

  // 水平翻转
  // [i, j] 与 [n - i - 1, j] 互换
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - i - 1, j)
    }
  }

  // 主对角线翻转，主对角线为：左上角到右下角
  // [i, j] 与 [j, i] 互换
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(matrix, i, j, j, i)
    }
  }

  return matrix
}

const swap = (matrix, x1, y1, x2, y2) => {
  const tmp = matrix[x1][y1]
  matrix[x1][y1] = matrix[x2][y2]
  matrix[x2][y2] = tmp
}
// @lc code=end
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]

const res = rotate(matrix)
console.log(res)
