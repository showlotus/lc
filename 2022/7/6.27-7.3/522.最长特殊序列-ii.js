/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  let res = -1
  const n = strs.length
  for (let i = 0; i < n; ++i) {
    let check = true
    for (let j = 0; j < n; ++j) {
      if (i !== j && isSubSequence(strs[i], strs[j])) {
        check = false
        break
      }
    }
    if (check) {
      res = Math.max(res, strs[i].length)
    }
  }
  return res
}

function isSubSequence(s, t) {
  let si = 0
  let ti = 0
  while (ti < t.length && si < s.length) {
    if (t[ti] === s[si]) {
      ++si
    }
    ++ti
  }
  return si === s.length
}
// @lc code=end
var strs = ["aba", "cdc", "eae"]
// strs = ["a", "baa", "cc"]
// strs = ["adsadsf", "a"]
strs = ["aaa", "aaa", "aa"]
console.log(findLUSlength(strs))
