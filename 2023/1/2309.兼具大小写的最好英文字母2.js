/*
 * @lc app=leetcode.cn id=2309 lang=javascript
 *
 * [2309] 兼具大小写的最好英文字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const map = new Set([...s])
  const A = "a".codePointAt(0) // 97
  for (let i = 25; i >= 0; i--) {
    const lowerCaseChar = String.fromCharCode(i + A)
    const upperCaseChar = lowerCaseChar.toUpperCase()
    if (map.has(lowerCaseChar) && map.has(upperCaseChar)) {
      return upperCaseChar
    }
  }
  return ""
}
// @lc code=end

let s = "lEeTcOdE"
// s = "arRAzFif"
// s = "AbCdEfGhIjK"

const res = greatestLetter(s)
console.log(res)

/* a-z: 97-122 */
/* A-Z: 65-90 */
