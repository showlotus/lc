/*
 * @lc app=leetcode.cn id=1450 lang=javascript
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let res = 0
  for (let i = 0, len = startTime.length; i < len; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      res++
    }
  }
  return res
}
// @lc code=end
