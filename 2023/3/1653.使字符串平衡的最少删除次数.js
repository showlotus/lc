/*
 * @lc app=leetcode.cn id=1653 lang=javascript
 *
 * [1653] 使字符串平衡的最少删除次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  if (s.length === 1) return 0
  let beforeB = 0
  let afterA = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      afterA++
    }
  }
  let res = afterA
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      beforeB++
    } else {
      afterA--
    }
    res = Math.min(res, beforeB + afterA)
  }
  return res
}
// @lc code=end
let s = "aababbab"
s = "bbaaaaabb"
s = "a"

const res = minimumDeletions(s)
console.log(res)
