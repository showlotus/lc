/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) return true
  const seq1 = sentence1.split(" ")
  const seq2 = sentence2.split(" ")
  let left = 0
  let right = 0
  while (
    left < seq1.length &&
    left < seq2.length &&
    seq1[left] === seq2[left]
  ) {
    left++
  }
  while (
    seq1.length - 1 - right >= left &&
    seq2.length - 1 - right >= left &&
    seq1[seq1.length - 1 - right] === seq2[seq2.length - 1 - right]
  ) {
    right++
  }
  if (left + right === seq1.length || left + right === seq2.length) {
    return true
  }
  return false
}
// @lc code=end
let sentence1 = "My name is Haley"
let sentence2 = "My Haley"

;(sentence1 = "b lot of"), (sentence2 = "A lot of")
// ;(sentence1 = "Eating right now"), (sentence2 = "Eating")
;(sentence1 = "Luky"), (sentence2 = "Lucccky")
// ;(sentence1 = "Ogn WtWj HneS"), (sentence2 = "Ogn WtWj HneS")
// ;(sentence1 = "a"), (sentence2 = "a aa a")
// ;(sentence1 = "A B C D B B"), (sentence2 = "A B B")

const res = areSentencesSimilar(sentence1, sentence2)
console.log(res)
