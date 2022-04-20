/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let wordsNum = new Array(26).fill(0)
  /* 记录字母频数 */
  for (let s of licensePlate) {
    let lowerCase = s.toLocaleLowerCase()
    if (/[a-zA-Z]/.test(lowerCase)) {
      wordsNum[lowerCase.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
  }
  let minLen = Number.MAX_SAFE_INTEGER
  let res = ''
  let flag = true
  let num = new Array(26).fill(0)
  words.forEach(word => {
    flag = true
    num = num.map(() => 0)
    for (let s of word) {
      num[s.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    for (let i = 0; i < 26; i++) {
      if (wordsNum[i] > num[i]) {
        flag = false
        break
      }
    }
    if (flag && word.length < minLen) {
      res = word
      minLen = word.length
    }
  })
  return res
};
// @lc code=end
let licensePlate = "1s3 PSt",
  words = ["step", "steps", "stripe", "stepple"]

licensePlate = "Ah71752", words = ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"]

licensePlate = "OgEu755", words = ["enough", "these", "play", "wide", "wonder", "box", "arrive", "money", "tax", "thus"]

console.log(shortestCompletingWord(licensePlate, words))
