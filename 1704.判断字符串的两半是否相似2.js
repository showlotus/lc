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
  const isVowels = w => /[aeiou]/gi.test(w)
  let i = 0
  let j = s.length - 1
  let first = 0
  let second = 0
  while (i < j) {
    if (isVowels(s[i])) {
      first++
    }
    if (isVowels(s[j])) {
      second++
    }
    i++
    j--
  }
  return first === second
}
// @lc code=end
let s = "book"
// s = "textbook"
// s = "aabboo"

let res = halvesAreAlike(s)
console.log(res)
