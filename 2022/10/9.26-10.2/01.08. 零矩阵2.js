/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let firstRowCanBeClear = false
  let firstColCanBeClear = false
  for (let j = 0; j < n; j++) {
    if (!matrix[0][j]) {
      firstRowCanBeClear = true
    }
  }
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) {
      firstColCanBeClear = true
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0
      }
    }
  }

  if (firstRowCanBeClear) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }

  if (firstColCanBeClear) {
    for (let i = 0; i < m; i++) {
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
