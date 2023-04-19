/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 方向顺序
  const dirs = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0] // up
  ]
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const total = n * n

  let x = 0
  let y = 0
  let currDir = 0
  for (let i = 1; i <= total; i++) {
    matrix[x][y] = i
    if (i === total) {
      break
    }
    while (true) {
      // 下一个位置
      const nextX = x + dirs[currDir][0]
      const nextY = y + dirs[currDir][1]
      // 如果当前方向上的下一个位置符合要求，更新当前位置，然后跳出循环
      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        matrix[nextX][nextY] === 0
      ) {
        x = nextX
        y = nextY
        break
      }
      // 切换下一个方向
      currDir = (currDir + 1) % dirs.length
    }
  }
  return matrix
}
// @lc code=end
let n = 3
// n = 1
// n = 4

const res = generateMatrix(n)
console.log(res)
