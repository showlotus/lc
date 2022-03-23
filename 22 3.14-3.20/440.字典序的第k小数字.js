/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function getCount(prefix, n) {
  let curr = prefix
  let next = prefix + 1
  let count = 0
  while (curr <= n) {
    count += Math.min(n + 1, next) - curr
    curr *= 10
    next *= 10
  }
  return count
}
var findKthNumber = function (n, k) {
  let p = 1
  let prefix = 1
  while (p < k) {
    let count = getCount(prefix, n)
    if (p + count > k) {
      prefix *= 10
      p++
    } else {
      prefix++
      p += count
    }
  }
  return prefix
}
// @lc code=end

var n = 13,
  k = 2
console.log(findKthNumber(n, k))
