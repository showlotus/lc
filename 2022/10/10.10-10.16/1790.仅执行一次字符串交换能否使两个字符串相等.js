/*
 * @lc app=leetcode.cn id=1790 lang=javascript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  const diffIdxs = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (diffIdxs.length < 2) {
        diffIdxs.push(i)
      } else {
        return false
      }
    }
  }
  if (diffIdxs.length === 0) {
    return true
  }
  return (
    s1[diffIdxs[0]] === s2[diffIdxs[1]] && s1[diffIdxs[1]] === s2[diffIdxs[0]]
  )
}
// @lc code=end
let s1 = "bank"
let s2 = "kanb"
s1 = "attack"
s2 = "defend"
s1 = "acb"
s2 = "abc"
s1 = "yhy"
s2 = "hyc"
let res = areAlmostEqual(s1, s2)
console.log(res)
