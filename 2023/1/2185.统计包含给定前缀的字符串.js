/*
 * @lc app=leetcode.cn id=2185 lang=javascript
 *
 * [2185] 统计包含给定前缀的字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.filter(v => v.startsWith(pref)).length
}
// @lc code=end
let words = ["pay", "attention", "practice", "attend"],
  pref = "at"

;(words = ["leetcode", "win", "loops", "success"]), (pref = "code")

const res = prefixCount(words, pref)

console.log(res)
