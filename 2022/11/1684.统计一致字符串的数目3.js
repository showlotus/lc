/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const num = getBinary(allowed)
  let res = 0
  words.forEach(word => {
    const wordNum = getBinary(word)
    if ((num | wordNum) === num) {
      res++
    }
  })
  return res
}

function getBinary(str) {
  let n = 0
  for (const s of str) {
    n |= 1 << (s.codePointAt(0) - "a".codePointAt(0))
  }
  return n
}
// @lc code=end
let allowed = "ab"
let words = ["ad", "bd", "aaab", "baa", "badab"]

// allowed = "abc"
// words = ["a", "b", "c", "ab", "ac", "bc", "abc"]

// allowed = "cad"
// words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]

let res = countConsistentStrings(allowed, words)
console.log(res)

console.log(getBinary("abc").toString(2))
console.log(getBinary("abcaaaaaz").toString(2))
