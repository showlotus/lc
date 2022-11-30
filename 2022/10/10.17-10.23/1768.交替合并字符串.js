/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = ""
  let i = 0
  let j = 0
  while (i < word1.length && j < word2.length) {
    res += `${word1[i++]}${word2[j++]}`
  }
  while (i < word1.length) {
    res += word1[i++]
  }
  while (j < word2.length) {
    res += word2[j++]
  }
  return res
}
// @lc code=end
let word1 = "abc",
  word2 = "pqr"
;(word1 = "ab"), (word2 = "pqrs11")
;(word1 = "abcd"), (word2 = "pq")
;(word1 = "a"), (word2 = "p")
let res = mergeAlternately(word1, word2)
console.log(res)
