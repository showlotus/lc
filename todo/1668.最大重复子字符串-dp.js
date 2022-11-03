/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let k = 0
  let words = word
  while (sequence.includes(words)) {
    words += word
    k++
  }
  return k
}
// @lc code=end
let sequence = "ababc"
let word = "ab"

sequence = "ababc"
word = "bac"

sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
word = "aaaba"
let res = maxRepeating(sequence, word)
console.log(res)
