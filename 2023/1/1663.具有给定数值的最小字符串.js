/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const BASE = "a".codePointAt(0) - 1
  let res = ""
  while (n > 0) {
    const c = k - (n - 1) * 26
    if (c <= 0) {
      res += "a"
      k -= 1
    } else {
      res += String.fromCharCode(c + BASE)
      k -= c
    }
    n--
  }
  return res
}
// @lc code=end
let n = 3
let k = 27

// ;(n = 5), (k = 73)
// ;(n = 2), (k = 2)

const res = getSmallestString(n, k)
console.log(res)
