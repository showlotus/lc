/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let flatCol0 = false
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) {
      flatCol0 = true
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  // 为了避免，首行被更新后，影响后续的判断，采用倒叙遍历
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0
      }
    }
    if (flatCol0) {
      matrix[i][0] = 0
    }
  }
  return matrix
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

matrix = [
  [0, 1, 2, 0],
  [3, 4, 0, 2],
  [1, 3, 1, 5]
]

let res = setZeroes(matrix)
console.log(res)
