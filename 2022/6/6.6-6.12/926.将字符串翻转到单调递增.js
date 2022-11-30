/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  const len = s.length
  const beforeOne = new Array(len).fill(0)
  const afterZero = new Array(len).fill(0)
  for (let i = 1, j = len - 2; i < len; i++, j--) {
    beforeOne[i] = beforeOne[i - 1] + (s.charAt(i - 1) === "1" ? 1 : 0)
    afterZero[j] = afterZero[j + 1] + (s.charAt(j + 1) === "0" ? 1 : 0)
  }

  let res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < len; i++) {
    res = Math.min(res, beforeOne[i] + afterZero[i])
  }

  return res
}
// @lc code=end

let s = "00110"

s = "00011000"

// s = "010110"
// s = "010001"

console.log(minFlipsMonoIncr(s))
