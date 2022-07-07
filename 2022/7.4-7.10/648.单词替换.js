/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const map = new Map(dictionary.map(v => [v, 1]))
  const words = sentence.split(" ")
  let res = ""
  words.forEach(w => {
    let hasRoot = false
    let root
    const len = w.length
    for (let i = 1; i < len; ++i) {
      const str = w.substring(0, i)
      if (map.has(str)) {
        hasRoot = true
        root = str
        break
      }
    }
    if (hasRoot) {
      res += w.substring(0, root.length)
    } else {
      res += w
    }
    res += " "
  })
  return res.trim()
}
// @lc code=end
var dictionary = ["cat", "bat", "rat"]
var sentence = "the cattle was rattled by the battery"

dictionary = ["a", "b", "c"]
sentence = "aadsfasf absbs bbab cadsfafs"

var res = replaceWords(dictionary, sentence)

console.log(res)
