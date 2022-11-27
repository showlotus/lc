/*
 * @lc app=leetcode.cn id=809 lang=javascript
 *
 * [809] 情感丰富的文字
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let res = 0
  for (const w of words) {
    if (cloudExpand(s, w)) {
      res++
    }
  }
  return res
}

const cloudExpand = (s, t) => {
  let i = 0
  let j = 0
  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      return false
    }
    const curr = s[i]
    let cntS = 0
    while (i < s.length && s[i] === curr) {
      i++
      cntS++
    }
    let cntT = 0
    while (j < t.length && t[j] === curr) {
      j++
      cntT++
    }
    if (cntS !== cntT && (cntS < cntT || cntS < 3)) return false
  }
  return i === s.length && j === t.length
}
// @lc code=end
let s = "heeellooo"
let words = ["hello", "hi", "helo"]

const res = expressiveWords(s, words)
console.log(res)
