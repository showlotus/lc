/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const targetMap = new Map()
  const countMap = new Map()
  for (const char of target) {
    if (!countMap.has(char)) {
      countMap.set(char, 0)
    }
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
  }

  for (const char of s) {
    if (countMap.has(char)) {
      countMap.set(char, countMap.get(char) + 1)
    }
  }

  let res = Number.MAX_VALUE
  for (const char of targetMap.keys()) {
    res = Math.min(res, Math.floor(countMap.get(char) / targetMap.get(char)))
  }
  return res
}
// @lc code=end
let s = "ilovecodingonleetcode"
let target = "code"

;(s = "abcba"), (target = "abc")
;(s = "abbaccaddaeea"), (target = "aaaaaf")

const res = rearrangeCharacters(s, target)
console.log(res)
