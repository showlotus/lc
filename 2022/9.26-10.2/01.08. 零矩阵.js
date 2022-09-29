/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rows = new Set()
  const cols = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0
      }
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
