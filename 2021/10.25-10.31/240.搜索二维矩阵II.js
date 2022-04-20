/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let maxRow = matrix.length
  let maxColumn = matrix[0].length
  let row = 0
  let column = maxColumn - 1
  let cnt = 0
  while (row >= 0 && row < maxRow && column >= 0 && column < maxColumn) {
    if (matrix[row][column] > target) {
      column--
    } else if (matrix[row][column] < target) {
      row++
    } else {
      return cnt + 1
      // return true
    }
    cnt++
  }
  return cnt
  // return false
};

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
let target = 26

let res = new Array(5).fill(0).map(() => new Array(5).fill(0))
// console.log(res)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    res[i][j] = searchMatrix(matrix, matrix[i][j])
  }
  // console.log(searchMatrix(matrix[i][j]))
}
console.log(res)

// console.log(searchMatrix(matrix, target))
