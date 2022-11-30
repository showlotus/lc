/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let currIndex = 1
  for (let i = 0, len = sentence.length; i < len; i++) {
    let currWord = ""
    while (i < len && sentence[i] !== " ") {
      currWord += sentence[i++]
      if (currWord === searchWord) {
        return currIndex
      }
    }
    currIndex++
  }
  return -1
}
// @lc code=end
var sentence = "i love eating burger",
  searchWord = "burg"
// ;(sentence = "this problem is an easy problem"), (searchWord = "pro")
// ;(sentence = "i am tired"), (searchWord = "you")
console.log(isPrefixOfWord(sentence, searchWord))
