/*
 * @lc app=leetcode.cn id=2022 lang=javascript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  let oriLen = original.length
  if (oriLen !== m * n) return []
  let res = new Array(m)
  let currIndex = 0
  for (let i = 0; i < m; i++) {
    res[i] = []
    for (let j = 0; j < n; j++) {
      res[i][j] = original[currIndex]
      currIndex++
    }
  }
  return res
}
// @lc code=end

var original = [1, 2, 3],
  m = 1,
  n = 3

;(original = [3]), (m = 1), (n = 2)
;(original = [1, 2, 3, 4]), (m = 2), (n = 2)
;(original = [1, 2]), (m = 1), (n = 1)

console.log(construct2DArray(original, m, n))
