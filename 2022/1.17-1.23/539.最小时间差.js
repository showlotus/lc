/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let minutesArr = Array.from(timePoints, v => {
    let hour = v.split(":")[0]
    let minute = v.split(":")[1]
    return parseInt(hour) * 60 + parseInt(minute)
  })
  let minRes = Number.MAX_SAFE_INTEGER
  for (let [i, v] of minutesArr.entries()) {
    for (let j = i + 1, len = minutesArr.length; j < len; j++) {
      let k = minutesArr[j]
      if (v > k) {
        minRes = Math.min(minRes, Math.min(v - k, k + 1440 - v))
      } else {
        minRes = Math.min(minRes, Math.min(k - v, v + 1440 - k))
      }
    }
  }
  return minRes
}

var findMinDifference_sort = function (timePoints) {
  if (timePoints.length > 1440) return 0
  // 排完序后，最小时间差必然是两个相邻时间产生或者头尾两时间产生
  timePoints.sort()
  let res = Number.MAX_SAFE_INTEGER
  let headMinutes, tailMinutes
  for (let i = 1, len = timePoints.length; i < len; i++) {
    let prev = timePoints[i - 1].split(":")
    let prevMinutes = parseInt(prev[0]) * 60 + parseInt(prev[1])
    if (i - 1 === 0) {
      headMinutes = prevMinutes
      timePoints.push
    }
    let curr = timePoints[i].split(":")
    let currMinutes = parseInt(curr[0]) * 60 + parseInt(curr[1])
    if (i === len - 1) {
      tailMinutes = currMinutes
    }
    res = Math.min(res, currMinutes - prevMinutes)
  }
  return Math.min(res, headMinutes + 1440 - tailMinutes)
}

// @lc code=end
var timePoints = ["05:00", "23:59", "10:00", "19:00"]

timePoints = ["23:59", "00:00"]

console.log(findMinDifference(timePoints))
console.log(findMinDifference_sort(timePoints))
