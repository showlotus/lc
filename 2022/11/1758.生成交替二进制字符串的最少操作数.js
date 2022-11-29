/*
 * @lc app=leetcode.cn id=1758 lang=javascript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let cnt = 0
  let nextVal = toggle(s[0])
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== nextVal) {
      cnt++
    }
    nextVal = toggle(nextVal)
  }
  return Math.min(cnt, s.length - cnt)
}

const toggle = function (n) {
  return ((+n + 1) % 2) + ""
}
// @lc code=end
let s = "0100"
s = "1111"
s = "11110"
s = "111100"
s = "1"
s = "100"
// s = "10010100"
let res = minOperations(s)
console.log(res)
