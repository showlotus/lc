/*
 * @lc app=leetcode.cn id=1003 lang=javascript
 *
 * [1003] 检查替换后的词是否有效
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 3 !== 0 || s.length < 3) return false
  const a = []
  const b = []
  const c = []
  let offset = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      a.push(i - offset)
    } else if (s[i] === "b") {
      b.push(i - offset)
    } else if (s[i] === "c") {
      c.push(i - offset)
    }

    if (
      s[i] === "c" &&
      b.length &&
      b[b.length - 1] === c[c.length - 1] - 1 &&
      a.length &&
      a[a.length - 1] === c[c.length - 1] - 2
    ) {
      a.pop()
      b.pop()
      c.pop()
      offset += 3
    }
  }
  return !a.length && !b.length && !c.length
}
// @lc code=end
let s = "aabcbc"
s = "aabbcc"
s = "abccba"
s = "abcabcababcc"

const res = isValid(s)
console.log(res)
