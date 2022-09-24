/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length
  if (k === 0) return new Array(n).fill(0)
  const preSum = new Array(n * 2).fill(0)
  for (let i = 1; i <= n * 2; i++) {
    preSum[i] = preSum[i - 1] + code[(i - 1) % n]
  }
  // code[i] = preSum[i + 1] - preSum[i]
  // code[i] + code[i - 1] = preSum[i + 1] - preSum[i - 1]
  const res = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (i + k < 0) {
      res[i] = preSum[i + n] - preSum[i + n + k]
    } else if (k < 0) {
      res[i] = preSum[i] - preSum[i + k]
    } else if (k > 0) {
      res[i] = preSum[i + k + 1] - preSum[i + 1]
    }
  }
  return res
}
// @lc code=end
let code = [5, 7, 1, 4],
  k = 3
// ;(code = [2, 4, 9, 3]), (k = -2)
;(code = [1, 2, 3, 4]), (k = 0)
;(code = [1, 2]), (k = 1)
let res = decrypt(code, k)
console.log(res)
