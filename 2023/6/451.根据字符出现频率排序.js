/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const count = new Map()
  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1)
  }
  const entries = Array.from(count.entries()).sort((a, b) => b[1] - a[1])
  let res = ""
  for (const [key, val] of entries) {
    res += key.repeat(val)
  }
  return res
}
// @lc code=end
let s = "tree"
s = "cccaaa"
s = "Aabb"

const res = frequencySort(s)
console.log(res)
