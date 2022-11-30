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
  const rows = new Array(m).fill(0)
  const cols = new Array(n).fill(0)
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] += mat[i][j]
      cols[j] += mat[i][j]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        res++
      }
    }
  }

  return res
}
// @lc code=end
