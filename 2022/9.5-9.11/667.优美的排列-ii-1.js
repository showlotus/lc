/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const res = new Array(n).fill(0)
  let idx = 0
  for (let i = 1; i < n - k; i++) {
    res[idx++] = i
  }

  for (let i = n - k, j = n; i <= j; i++, j--) {
    res[idx++] = i
    if (i !== j) {
      res[idx++] = j
    }
  }

  return res
}
// @lc code=end
var n = 5,
  k = 3
;(n = 10), (k = 1)
// ;(n = 10), (k = 2)
// ;(n = 3), (k = 2)
var res = constructArray(n, k)
console.log(res)
