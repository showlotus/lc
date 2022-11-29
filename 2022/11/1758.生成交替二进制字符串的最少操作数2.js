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
  const ops = s[0] === "0" ? ["0", "1"] : ["1", "0"]
  for (let i = 0; i < s.length; i++) {
    if (ops[i % 2] !== s[i]) {
      cnt++
    }
  }
  return Math.min(cnt, s.length - cnt)
}
// @lc code=end
let s = "0100"
s = "1111"
s = "11110"
s = "111100"
s = "1"
s = "100"
s = "10010100"
let res = minOperations(s)
console.log(res)
