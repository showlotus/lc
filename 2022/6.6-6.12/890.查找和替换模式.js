/*
 * @lc app=leetcode.cn id=890 lang=javascript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const res = []
  words.forEach(word => {
    if (isMatched(word, pattern)) {
      res.push(word)
    }
  })
  return res
}

function isMatched(word, pattern) {
  if (word.length !== pattern.length) return false

  let map1 = {}
  let map2 = {}
  for (let i = 0, len = word.length; i < len; i++) {
    if (!map1[word[i]] && !map2[pattern[i]]) {
      map1[word[i]] = pattern[i]
      map2[pattern[i]] = word[i]
    } else if (map1[word[i]] !== pattern[i] || map2[pattern[i]] !== word[i]) {
      return false
    }
  }
  return true
}
// @lc code=end
let str1 = "abc"
let pattern = "abb"

let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"]

console.log(isMatched(str1, pattern))

console.log(findAndReplacePattern(words, pattern))
