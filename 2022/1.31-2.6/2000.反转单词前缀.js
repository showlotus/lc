/*
 * @lc app=leetcode.cn id=2000 lang=javascript
 *
 * [2000] 反转单词前缀
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let end = word.indexOf(ch)
  if (!~end) return word
  let res = ""
  let len = word.length
  for (let i = end; i >= 0; i--) {
    res += word[i]
  }
  for (let i = end + 1; i < len; i++) {
    res += word[i]
  }
  return res
}
// @lc code=end
var word = "abcdefd",
  ch = "d"
;(word = "abcd"), (ch = "z")
;(word = "xyxzxe"), (ch = "z")
console.log(reversePrefix(word, ch))
