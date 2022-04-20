/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let res = keysPressed[0]
  let maxLong = releaseTimes[0]
  for (let i = 1, len = releaseTimes.length; i < len; i++) {
    let diff = releaseTimes[i] - releaseTimes[i - 1]
    if (diff > maxLong) {
      maxLong = diff
      res = keysPressed[i]
    } else if (diff === maxLong && keysPressed[i] > res) {
      res = keysPressed[i]
    }
  }
  return res
}
// @lc code=end

var releaseTimes = [9, 29, 49, 50],
  keysPressed = "cbcd"

;(releaseTimes = [12, 23, 36, 46, 62]), (keysPressed = "spuda")
;(releaseTimes = [12, 25]), (keysPressed = "sp")
;(releaseTimes = [28, 65, 97]), (keysPressed = "gaf")
console.log(slowestKey(releaseTimes, keysPressed))
