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
  const count = new Set([...allowed])
  let res = 0
  for (const str of words) {
    const strCount = new Set([...str])
    if (count.size < strCount.size) {
      continue
    }
    let flag = true
    for (const s of strCount.values()) {
      if (!count.has(s)) {
        flag = false
        break
      }
    }
    if (flag) {
      res++
    }
  }
  return res
}
// @lc code=end
let allowed = "ab"
let words = ["ad", "bd", "aaab", "baa", "badab"]

allowed = "abc"
words = ["a", "b", "c", "ab", "ac", "bc", "abc"]

// allowed = "cad"
// words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]

let res = countConsistentStrings(allowed, words)
console.log(res)

console.log(2 ^ 3)
