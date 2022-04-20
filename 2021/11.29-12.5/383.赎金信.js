/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map()
  for (let s of magazine) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1)
    } else {
      map.set(s, 1)
    }
  }
  for (let s of ransomNote) {
    if (map.has(s)) {
      let n = map.get(s) - 1
      if (n > 0) {
        map.set(s, n)
      } else {
        map.delete(s)
      }
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

let ransomNote = "a",
  magazine = "b"
ransomNote = "aa", magazine = "aab"
ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine))
