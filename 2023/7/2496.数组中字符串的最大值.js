/*
 * @lc app=leetcode.cn id=2496 lang=javascript
 *
 * [2496] 数组中字符串的最大值
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  return strs.reduce((res, str) => {
    const len = /^\d+$/.test(str) ? Number(str) : str.length
    return Math.max(res, len)
  }, 0)
}
// @lc code=end
let strs = ["alic3", "bob", "3", "4", "00000"]
strs = ["1", "01", "001", "0001"]
strs = ["0001", "aaa"]

const res = maximumValue(strs)
console.log(res)
