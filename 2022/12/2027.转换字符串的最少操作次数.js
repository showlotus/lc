/*
 * @lc app=leetcode.cn id=2027 lang=javascript
 *
 * [2027] 转换字符串的最少操作次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let res = 0
  let next = -1
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "X" && i > next) {
      res++
      next = i + 2
    }
  }
  return res
}
// @lc code=end
let s = "XXX"
s = "XXOX"
// s = "OOOO"
// s = "OXOX"

const res = minimumMoves(s)
console.log(res)
