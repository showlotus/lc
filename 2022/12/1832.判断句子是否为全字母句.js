/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false
  const letters = new Array(26).fill(0)
  for (const s of sentence) {
    letters[s.charCodeAt(0) - "a".charCodeAt(0)] = 1
  }
  for (let i = 0; i < 26; i++) {
    if (letters[i] === 0) {
      return false
    }
  }
  return true
}
// @lc code=end
let sentence = "thequickbrownfoxjumpsoverthelazydog"
sentence = "leetcode"
const res = checkIfPangram(sentence)
console.log(res)
