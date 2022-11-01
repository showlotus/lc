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
  let left = 0
  let right = 0
  let leftIdx = 0
  let rightIdx = 0
  while (left < word1.length && right < word2.length) {
    if (word1[left][leftIdx] !== word2[right][rightIdx]) {
      return false
    }

    if (leftIdx === word1[left].length - 1) {
      left++
      leftIdx = 0
    } else {
      leftIdx++
    }

    if (rightIdx === word2[right].length - 1) {
      right++
      rightIdx = 0
    } else {
      rightIdx++
    }
  }
  return left === word1.length && right === word2.length
}
// @lc code=end
let word1 = ["ab", "c"],
  word2 = ["a", "bc"]
// ;(word1 = ["a", "cb"]), (word2 = ["ab", "c"])
// ;(word1 = ["a", "bcdefg"]), (word2 = ["ab", "c", "d", "e", "f", "g"])
// ;(word1 = ["a", "b"]), (word2 = ["a", "g"])
;(word1 = ["a"]), (word2 = ["g"])
let res = arrayStringsAreEqual(word1, word2)
console.log(res)
