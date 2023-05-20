/*
 * @lc app=leetcode.cn id=2437 lang=javascript
 *
 * [2437] 有效时间的数目
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  let countHour = 0
  let countMinute = 0

  time = time.split("").map(v => {
    if (/\d/.test(v)) {
      return Number(v)
    }
    return v
  })

  for (let i = 0; i < 24; i++) {
    const first = Math.floor(i / 10)
    const second = i % 10
    if (
      (time[0] === "?" || time[0] === first) &&
      (time[1] === "?" || time[1] === second)
    ) {
      countHour++
    }
  }

  for (let i = 0; i < 60; i++) {
    const first = Math.floor(i / 10)
    const second = i % 10
    if (
      (time[3] === "?" || time[3] === first) &&
      (time[4] === "?" || time[4] === second)
    ) {
      countMinute++
    }
  }

  return countHour * countMinute
}
// @lc code=end

let time = "??:??"
time = "?0:1?"
// time = "??:??"

const res = countTime(time)
console.log(res)
