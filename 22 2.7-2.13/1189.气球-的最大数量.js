/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let baseMap = new Map()
  let numsMap = new Map()
  for (let s of "balloon") {
    if (!baseMap.has(s)) {
      baseMap.set(s, 1)
      numsMap.set(s, 0)
    } else {
      baseMap.set(s, baseMap.get(s) + 1)
    }
  }
  for (let s of text) {
    if (numsMap.has(s)) {
      numsMap.set(s, numsMap.get(s) + 1)
    }
  }
  let res = Number.MAX_SAFE_INTEGER
  for (let s of "ballon") {
    res = Math.min(Math.floor(numsMap.get(s) / baseMap.get(s)), res)
  }
  return res
}
// @lc code=end
var text = "nlaebolko"
text = "loonbalxballpoon"
text = "balon"
console.log(maxNumberOfBalloons(text))
