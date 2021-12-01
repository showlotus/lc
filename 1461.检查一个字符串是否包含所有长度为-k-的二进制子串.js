/*
 * @lc app=leetcode.cn id=1461 lang=javascript
 *
 * [1461] 检查一个字符串是否包含所有长度为 K 的二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  if (s.length - k + 1 < Math.pow(2, k)) return false
  let map = new Map();
  let i = 0;
  while (i <= s.length - k) {
    let sub = s.substr(i, k)
    let num = parseInt(sub, 2)
    if (!map.has(num)) {
      map.set(num, 1)
    }
    if (map.size === Math.pow(2, k)) return true
    i++
  }
  return map.size === Math.pow(2, k)
};
// @lc code=end

let s = "00110",
  k = 2
s = "0110", k = 1
s = "00110110", k = 2
// s = "0110", k = 2
s = "0000000001011100", k = 4
console.log(hasAllCodes(s, k))
