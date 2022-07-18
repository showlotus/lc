/*
 * @lc app=leetcode.cn id=1886 lang=javascript
 *
 * [1886] 判断矩阵经轮转后是否一致
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length
  // 由源矩阵遍历方向（左->右，顶->底）对应的四个转换方向
  const dirs = [
    (x, y) => [x, y],
    (x, y) => [y, n - 1 - x],
    (x, y) => [n - 1 - y, x],
    (x, y) => [n - 1 - x, n - 1 - y]
  ]

  for (let i = 0; i < 4; ++i) {
    let canTransfer = true
    const transferFn = dirs[i]
    for (let row = 0; row < n; ++row) {
      for (let col = 0; col < n; ++col) {
        const [x, y] = transferFn(row, col)
        if (mat[row][col] !== target[x][y]) {
          canTransfer = false
          break
        }
      }

      if (!canTransfer) {
        break
      }
    }

    if (canTransfer) {
      return true
    }
  }

  return false
}
// @lc code=end
var mat = [
    [0, 1],
    [1, 0]
  ],
  target = [
    [1, 0],
    [0, 1]
  ]

mat = [
  [0, 1],
  [1, 1]
]
target = [
  [1, 0],
  [0, 1]
]

mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
]

target = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0]
]

console.log(findRotation(mat, target))
