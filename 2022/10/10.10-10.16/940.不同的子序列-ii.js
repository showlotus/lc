/*
 * @lc app=leetcode.cn id=940 lang=javascript
 *
 * [940] 不同的子序列 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 10 ** 9 + 7
  const last = new Array(26).fill(-1)
  const n = s.length
  const f = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 26; j++) {
      if (last[j] !== -1) {
        f[i] = (f[i] + f[last[j]]) % MOD
      }
    }
    last[s[i].charCodeAt(0) - "a".charCodeAt(0)] = i
  }
  let res = 0
  for (let i = 0; i < 26; i++) {
    if (last[i] !== -1) {
      res = (res + f[last[i]]) % MOD
    }
  }
  return res
}
// @lc code=end
let s = "abc"
s = "aba"
s = "aaa"
let res = distinctSubseqII(s)
console.log(res)
