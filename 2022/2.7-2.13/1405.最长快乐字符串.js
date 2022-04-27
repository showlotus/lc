/*
 * @lc app=leetcode.cn id=1405 lang=javascript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let res = ""
  let arr = [
    ["a", a],
    ["b", b],
    ["c", c],
  ]
  while (1) {
    arr.sort((a, b) => b[1] - a[1])
    let hasNext = false
    for (let [i, [char, cnt]] of arr.entries()) {
      if (cnt <= 0) break
      let len = res.length
      if (len >= 2 && res[len - 1] === char && res[len - 2] === char) {
        continue
      }
      res += char
      arr[i][1]--
      hasNext = true
      break
    }
    if (!hasNext) break
  }
  return res
}
// @lc code=end
var a = 2,
  b = 2,
  c = 1
;(a = 7), (b = 1), (c = 0)
console.log(longestDiverseString(a, b, c))
