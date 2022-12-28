/*
 * @lc app=leetcode.cn id=1750 lang=javascript
 *
 * [1750] 删除字符串两端相同字符后的最短长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  /**
   * 双指针
   * 初始时，i = 0，j = s.length - 1
   * 每轮循环，先比较 s[i] 与 s[j] 是否相等
   * 如果不等，返回 j - i + 1
   * 否则，i 向后查找 i1，s[i] == s[i1]，确保 i1 < j
   * j 向前查找 j1，s[j] == s[j1]，确保 j1 > i
   * 一轮查找完成后，更新 i = i1，j = j1
   * 比较 i 与 j 的值，如果 j - i == 1，返回 0
   * 否则进入下一轮循环
   */
  let i = 0
  let j = s.length - 1
  while (i <= j) {
    if (i === j || s[i] !== s[j]) {
      return j - i + 1
    }
    const char = s[i]
    while (i < j && s[i] === char) {
      i++
    }
    while (j >= i && s[j] === char) {
      j--
    }
  }
  return 0
}
// @lc code=end
let s = "ca"
s = "aba"
s = "abbba"
s = "cabaabac"
s = "aabccabba"
s = "abbbbbbbbbbbbbbbbbbba"

const res = minimumLength(s)
console.log(res)
