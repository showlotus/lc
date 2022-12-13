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
  let baseVal = 0
  for (const s of sentence) {
    baseVal |= 1 << (s.charCodeAt(0) - "a".charCodeAt(0))
  }
  return baseVal === 2 ** 26 - 1
}
// @lc code=end
let sentence = "thequickbrownfoxjumpsoverthelazydog"
sentence = "leetcode"
const res = checkIfPangram(sentence)
console.log(res)
