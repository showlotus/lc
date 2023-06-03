/*
 * @lc app=leetcode.cn id=1156 lang=javascript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const map = new Map()
  for (const s of text) {
    map.set(s, (map.get(s) || 0) + 1)
  }

  let res = 0
  for (let i = 0; i < text.length; ) {
    let j = i
    while (j < text.length && text[j] === text[i]) {
      j++
    }

    let k = j + 1
    while (k < text.length && text[k] === text[i]) {
      k++
    }
    res = Math.max(res, Math.min(k - i, map.get(text[i])))
    i = j
  }
  return res
}
// @lc code=end
let text = "ababa"
text = "aaabaaa"
text = "aaabbaaa"
text = "abcdef"
text = "a"
text = "aaabcaaba"

const res = maxRepOpt1(text)
console.log(res)
