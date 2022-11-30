/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const isLetter = str => /[A-z]/.test(str)
  const n = s.length
  const res = []
  const dfs = (i, seq) => {
    if (i >= n) {
      res.push(seq)
      return
    }
    if (isLetter(s[i])) {
      dfs(i + 1, seq + s[i].toLowerCase())
      dfs(i + 1, seq + s[i].toUpperCase())
    } else {
      dfs(i + 1, seq + s[i])
    }
  }
  dfs(0, "")
  return res
}
// @lc code=end
let s = "a1b2"
s = "3z4"
s = "abc"
let res = letterCasePermutation(s)
console.log(res)
