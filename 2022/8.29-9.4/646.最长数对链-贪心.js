/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1])
  let curr = Number.MIN_SAFE_INTEGER
  let res = 0
  for (const s of pairs) {
    if (curr < s[0]) {
      curr = s[1]
      res++
    }
  }
  return res
}
// @lc code=end
var arr = [
  [1, 2],
  [2, 2.3],
  [2.1, 2.6],
  [3, 4]
]

var res = findLongestChain(arr)
console.log(res)
