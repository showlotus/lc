/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let res = -1
  const map = new Map()
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i]
    if (!map.has(char)) {
      map.set(char, i)
    } else {
      res = Math.max(res, i - map.get(char) - 1)
    }
  }
  return res
}
// @lc code=end
let s = "aa"
s = "abca"
s = "abc"
let res = maxLengthBetweenEqualCharacters(s)
console.log(res)
