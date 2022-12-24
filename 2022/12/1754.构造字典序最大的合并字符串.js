/*
 * @lc app=leetcode.cn id=1754 lang=javascript
 *
 * [1754] 构造字典序最大的合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let i = 0
  let j = 0
  let res = ""
  while (i < word1.length || j < word2.length) {
    if (i < word1.length && word1.slice(i) > word2.slice(j)) {
      res += word1[i++]
    } else {
      res += word2[j++]
    }
  }
  return res
}
// @lc code=end
let word1 = "abcabc"
let word2 = "abdcaba"

word1 = "cabaa"
word2 = "cabc"

// word1 = "uuurruuuruuuuuuuuruuuuu"
// word2 = "urrrurrrrrrrruurrrurrrurrrrruu"

const res = largestMerge(word1, word2)
console.log(res)
