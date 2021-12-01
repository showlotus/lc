/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (s.length === 1) return 1
  let res = 0
  let cnt = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt += 1
    } else {
      cnt = 1
    }
    res = Math.max(res, cnt)
  }
  return res
};
// @lc code=end
let s = "leetcode"
s = "abbcccddddeeeeedcba"
s = 'ab'
s = "hooraaaaaaaaaaay"
s = 'cc'
console.log(maxPower(s))
