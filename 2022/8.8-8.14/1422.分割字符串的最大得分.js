/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const n = s.length
  const oneNums = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    oneNums[i + 1] = oneNums[i] + (s[i] === "1" ? 1 : 0)
  }

  let res = 0
  for (let i = 1; i < n; i++) {
    const leftVal = i - oneNums[i]
    const rightVal = oneNums[n] - oneNums[i]
    res = Math.max(res, leftVal + rightVal)
  }
  return res
}
// @lc code=end
var s = "011101"
// s = "00111"
// s = "1111"
// s = "00"
s = "01"

var res = maxScore(s)
console.log(res)
