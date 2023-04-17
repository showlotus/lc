/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  const rangeAlice = [arriveAlice, leaveAlice].map(gen)
  const rangeBob = [arriveBob, leaveBob].map(gen)

  if (rangeAlice[0] <= rangeBob[1] && rangeBob[0] <= rangeAlice[1]) {
    return (
      Math.min(rangeAlice[1], rangeBob[1]) -
      Math.max(rangeAlice[0], rangeBob[0]) +
      1
    )
  } else {
    return 0
  }
}

// 把日期换算成当前年的第几天
const gen = (function () {
  const M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const preSum = new Array(13).fill(0)
  for (let i = 0; i < 12; i++) {
    preSum[i + 1] = preSum[i] + M[i]
  }
  return function (date) {
    const [m, d] = date.split("-").map(Number)
    return preSum[m - 1] + d
  }
})()

// @lc code=end
let arriveAlice = "08-15",
  leaveAlice = "08-18",
  arriveBob = "08-16",
  leaveBob = "08-19"

// arriveAlice = "10-01"
// leaveAlice = "10-31"
// arriveBob = "11-01"
// leaveBob = "12-31"

// arriveAlice = "09-01"
// leaveAlice = "10-19"
// arriveBob = "06-19"
// leaveBob = "10-20"

// arriveAlice = "09-01"
// leaveAlice = "10-19"
// arriveBob = "01-19"
// leaveBob = "10-19"

const res = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)
console.log(res)
