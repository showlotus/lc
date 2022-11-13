/*
 * @lc app=leetcode.cn id=791 lang=javascript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const count = Object.create(null)
  // 预处理
  for (let i = 0; i < 26; i++) {
    count[String.fromCodePoint("a".charCodeAt(0) + i)] = 0
  }
  // 记录每个字符出现次数
  for (let i = 0; i < s.length; i++) {
    ++count[s[i]]
  }

  let res = ""
  // 将字符重复 n（n 为出现次数） 次后，追加在结果中
  for (const char of order) {
    res += char.repeat(count[char])
    count[char] = 0
  }

  // 追加未在 order 中的字符
  Object.entries(count).forEach(([key, val]) => {
    res += key.repeat(val)
  })
  return res
}
// @lc code=end
let order = "cba"
let s = "abcd"

// order = "cbafg"
// s = "abcd"

// order = "a"
// s = "b"

let res = customSortString(order, s)
console.log(res)
