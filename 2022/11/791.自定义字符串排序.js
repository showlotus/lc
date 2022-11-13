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
  const orderMap = Object.create(null)
  // 预处理，将 26 个字母权重都设为 0
  for (let i = 0; i < 26; i++) {
    orderMap[String.fromCodePoint("a".charCodeAt(0) + i)] = 0
  }

  // 遍历 order，重新设置权重
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i
  }

  // 根据权重排序
  return s
    .split("")
    .sort((a, b) => orderMap[a] - orderMap[b])
    .join("")
}
// @lc code=end
let order = "cba"
let s = "abcd"

order = "cbafg"
s = "abcd"

order = "a"
s = "b"

let res = customSortString(order, s)
console.log(res)
