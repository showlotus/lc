/*
 * @lc app=leetcode.cn id=2325 lang=javascript
 *
 * [2325] 解密消息
 */

// @lc code=start
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const BASE = "a".charCodeAt(0)
  const map = new Map()
  for (const char of key) {
    if (char !== " " && !map.has(char)) {
      map.set(char, String.fromCharCode(map.size + BASE))
    }
  }
  let res = ""
  for (const char of message) {
    if (map.has(char)) {
      res += map.get(char)
    } else {
      res += char
    }
  }
  return res
}
// @lc code=end
let key = "the quick brown fox jumps over the lazy dog"
let message = "vkbs bs t suepuv"

;(key = "eljuxhpwnyrdgtqkviszcfmabo"),
  (message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb")

const res = decodeMessage(key, message)
console.log(res)
