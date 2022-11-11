/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const n = s.length
  const first = s.slice(0, n / 2)
  const second = s.slice(n / 2)
  const replaceVowels = str => str.replace(/[aeiou]/gi, "")
  return replaceVowels(first).length === replaceVowels(second).length
}
// @lc code=end
let s = "book"
s = "textbook"
s = "aabboo"

let res = halvesAreAlike(s)
console.log(res)
