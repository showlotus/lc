/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let res = 0
  const n = arr.length
  const map = new Map(arr.map((v, i) => [v, i]))
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (arr[j] * 2 <= arr[i]) break
      if (map.has(arr[i] - arr[j])) {
        const k = map.get(arr[i] - arr[[j]])
        dp[j][i] = Math.max(dp[k][j] + 1, 3)
        res = Math.max(res, dp[j][i])
      }
    }
  }
  return res
}
// @lc code=end
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr = [1, 3, 7, 11, 12, 14, 18]
var res = lenLongestFibSubseq(arr)
console.log(res)
