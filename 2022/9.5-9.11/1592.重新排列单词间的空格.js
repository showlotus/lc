/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaces = 0
  const words = []
  for (let i = 0, len = text.length; i < len; ) {
    if (text[i] === " ") {
      spaces++
      i++
      continue
    }

    let j = i
    while (j < len && text[j] !== " ") {
      j++
    }

    words.push(text.slice(i, j))
    i = j
  }
  const wordLen = words.length
  if (wordLen > 1) {
    const maxSpace = Math.floor(spaces / (wordLen - 1))
    const tailSpace = " ".repeat(spaces % (wordLen - 1))
    return words.join(" ".repeat(maxSpace)) + tailSpace
  } else {
    return words[0] + " ".repeat(spaces)
  }
}
// @lc code=end
var text = "  this   is  a sentence "
text = " practice   makes   perfect"
text = "hello   world"
text = "a b c d"
text = "  hello"

var res = reorderSpaces(text)
console.log(`_${res}_`)
