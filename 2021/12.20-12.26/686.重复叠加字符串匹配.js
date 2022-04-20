/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let res = a
  let cnt = 1
  let a_len = a.length
  while (res.length < b.length + a_len * 2) {
    if (~res.indexOf(b)) {
      return cnt
    }
    cnt++
    res += a
  }
  return -1
};
// @lc code=end

var a = "abcd",
  b = "cdabcdab"
// a = "a", b = "aa"
// a = "abc", b = "wxyz"
// a = 'a', b = 'a'
// a = "abc", b = "cabcabca"
// a = "aaaaaaaaaaaaaaaaaaaaaab", b = "ba"
console.log(repeatedStringMatch(a, b))
