/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let len = words.length
  if (len === 1) return words[0]
  words.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length
    return b - a
  })
  let maxLen = 0
  let res = ""
  let map = new Map()
  map.set("", 1)
  for (let s of words) {
    const wordLength = s.length
    if (map.has(s.substr(0, wordLength - 1))) {
      if (wordLength > maxLen || (wordLength === maxLen && s < res)) {
        maxLen = wordLength
        res = s
      }
      map.set(s, 1)
    }
  }
  return res
}
// @lc code=end
var words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// words = ["w", "wo", "wor", "worl", "world", "xyz", "xyzz"]
// words = ["w", "wo", "wor", "worl", "world"]
words = [
  "rac",
  "rs",
  "ra",
  "on",
  "r",
  "otif",
  "o",
  "onpdu",
  "rsf",
  "rs",
  "ot",
  "oti",
  "racy",
  "onpd",
]
// words = ["1"]
console.log(longestWord(words))
