/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length
  const n = mat[0].length
  for (let i = 0; i < m; i++) {
    let cnt = 0
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        cnt++
      }
    }

    if (i === 0) {
      cnt--
    }

    if (cnt > 0) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1) {
          mat[0][j] += cnt
        }
      }
    }
  }

  let res = 0
  for (const s of mat[0]) {
    if (s === 1) {
      res++
    }
  }
  return res
}
// @lc code=end
var mat = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]

var res = numSpecial(mat)
console.log(res)
