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
  if (k === 1) {
    return new Array(n).fill(0).map((_, i) => i + 1)
  }

  let l = 1
  let r = n
  const res = []
  const sortType = k % 2 === 0 ? "desc" : "asc"
  while (k > 1 && l < r) {
    if (l === 1) {
      res.push(l++)
      k--
      continue
    }

    if (l <= n - r + 1) {
      res.push(l++)
    } else {
      res.push(r--)
    }
    k--
  }

  if (sortType === "desc") {
    for (let i = r; i >= l; i--) {
      res.push(i)
    }
  } else {
    for (let i = l; i <= r; i++) {
      res.push(i)
    }
  }

  return res
}
// @lc code=end
var n = 5,
  k = 3
// ;(n = 10), (k = 9)
// ;(n = 10), (k = 2)
;(n = 3), (k = 2)
n = 3
k = 2
var res = constructArray(n, k)
console.log(res)
