/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (const [row, col] of indices) {
    for (let i = 0; i < n; ++i) {
      arr[row][i]++
    }

    for (let i = 0; i < m; ++i) {
      arr[i][col]++
    }
  }
  const oddNums = arr =>
    arr.reduce((nums, val) => (val % 2 === 1 ? ++nums : nums), 0)
  return arr.reduce((nums, row) => nums + oddNums(row), 0)
}
// @lc code=end
