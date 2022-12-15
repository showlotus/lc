/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let str = ""
  for (const char of s) {
    str += char.charCodeAt(0) - "a".charCodeAt(0) + 1
  }
  let sum
  while (k > 0) {
    sum = 0
    for (const s of str) {
      sum += +s
    }
    str = sum + ""
    k--
  }
  return sum
}
// @lc code=end

let s = "iiii"
let k = 1

s = "leetcode"
k = 1

s = "dbvmfhnttvr"
k = 5

const res = getLucky(s, k)
console.log(res)
