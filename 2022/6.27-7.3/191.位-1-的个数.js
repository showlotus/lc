/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n, digits = 32) {
  if (n === 0 || digits === 1) {
    return n
  }

  const half = digits / 2
  let l = n
  for (let i = 0; i < half; ++i) {
    l = Math.floor(l / 2)
  }
  const r = n & (2 ** half - 1)
  return hammingWeight(l, half) + hammingWeight(r, half)
}
// @lc code=end

var n = 3
n = 7
// n = 128
// n = 11
// n = 4294967293
var res = hammingWeight(n)

console.log(res)
