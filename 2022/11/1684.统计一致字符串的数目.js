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
  const count = getCount(allowed)
  let res = 0
  words.forEach(str => {
    const strCount = getCount(str)
    if (compare(count, strCount)) {
      res++
    }
  })
  return res
}

function getCount(str) {
  const arr = new Array(26).fill(0)
  for (const s of str) {
    arr[s.codePointAt(0) - "a".codePointAt(0)] = 1
  }
  return arr
}

function compare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i]) {
      return false
    }
  }
  return true
}
// @lc code=end
let allowed = "ab"
let words = ["ad", "bd", "aaab", "baa", "badab"]

allowed = "abc"
words = ["a", "b", "c", "ab", "ac", "bc", "abc"]

allowed = "cad"
words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]

let res = countConsistentStrings(allowed, words)
console.log(res)

console.log(2 ^ 3)
