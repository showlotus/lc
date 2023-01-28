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
  const map = new Array(26).fill(0).map(() => new Array(2).fill(""))
  for (const char of s) {
    const idx = char.toLowerCase().codePointAt(0) - "a".codePointAt(0)
    if (isUpperCase(char)) {
      map[idx][0] = char
    } else {
      map[idx][1] = char
    }
  }
  for (let i = 25; i >= 0; i--) {
    if (map[i][0] && map[i][1]) {
      return map[i][0]
    }
  }
  return ""
}

const isUpperCase = s => /[A-Z]/.test(s)
// @lc code=end

let s = "lEeTcOdE"
s = "arRAzFif"
s = "AbCdEfGhIjK"

const res = greatestLetter(s)
console.log(res)

console.log("a".codePointAt(0))
console.log("z".codePointAt(0))
console.log("A".codePointAt(0))
console.log("Z".codePointAt(0))
