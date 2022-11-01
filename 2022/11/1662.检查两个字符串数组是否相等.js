/*
 * @lc app=leetcode.cn id=1662 lang=javascript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  const word1Len = word1.length
  const word2Len = word2.length
  let n = 0
  let i = 0
  let j = 0
  let word1Nums = 0
  let word2Nums = 0
  while (
    i < word1Len &&
    j < word2Len &&
    word1[i][n - word1Nums] === word2[j][n - word2Nums]
  ) {
    if (n - word1Nums === word1[i].length - 1) {
      word1Nums += word1[i].length
      i++
    }
    if (n - word2Nums === word2[j].length - 1) {
      word2Nums += word2[j].length
      j++
    }
    n++
  }
  return i === word1Len && j === word2Len && n === word1Nums && n === word2Nums
}
// @lc code=end
let word1 = ["ab", "c"],
  word2 = ["a", "bc"]
// ;(word1 = ["a", "cb"]), (word2 = ["ab", "c"])
// ;(word1 = ["a", "bcdefg"]), (word2 = ["ab", "c", "d", "e", "f", "g"])
// ;(word1 = ["a", "b"]), (word2 = ["g"])
;(word1 = ["a", "b"]), (word2 = ["a", "g"])
let res = arrayStringsAreEqual(word1, word2)
console.log(res)
