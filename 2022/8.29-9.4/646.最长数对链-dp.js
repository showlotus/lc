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
  pairs.sort((a, b) => a[0] - b[0])
  const n = pairs.length
  const dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[n - 1]
}

// @lc code=end
var arr = [
  [1, 2],
  [2, 3],
  [2.1, 2.4],
  [3, 4]
]

var res = findLongestChain(arr)
console.log(res)
