/*
 * @lc app=leetcode.cn id=1781 lang=javascript
 *
 * [1781] 所有子字符串美丽值之和
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const count = new Array(26).fill(0)
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++
    let maxCount = 1
    for (let j = i + 1; j < s.length; j++) {
      count[s[j].charCodeAt(0) - "a".charCodeAt(0)]++
      maxCount = Math.max(
        maxCount,
        count[s[j].charCodeAt(0) - "a".charCodeAt(0)]
      )
      let minCount = maxCount
      for (let k = 0; k < 26; k++) {
        if (count[k] > 0) {
          minCount = Math.min(minCount, count[k])
        }
      }
      res += maxCount - minCount
    }
  }
  return res
}
// @lc code=end
let s = "aabcb"
// s = "aabcbaa"
// s = "aabb"
const res = beautySum(s)
console.log(res)
