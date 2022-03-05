/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  const aLen = a.length
  const bLen = b.length
  return aLen > bLen ? aLen : a === b ? -1 : bLen
}
// @lc code=end
var a = "aba",
  b = "cdc"

// ;(a = "b1bb"), (b = "bbb")

console.log(findLUSlength(a, b))
