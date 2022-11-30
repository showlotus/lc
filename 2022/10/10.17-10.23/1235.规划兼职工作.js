/*
 * @lc app=leetcode.cn id=1235 lang=javascript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = endTime.length
  const jobs = new Array(n)
    .fill(0)
    .map((_, i) => [startTime[i], endTime[i], profit[i]])
  jobs.sort((a, b) => a[1] - b[1])
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    const k = binarySearch(jobs, i - 1, jobs[i - 1][0])
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2])
  }
  return dp[n]
}

function binarySearch(jobs, i, time) {
  let l = 0
  let r = i
  while (l < r) {
    const mid = ((r - l) >> 1) + l
    if (jobs[mid][1] > time) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
// @lc code=end
let startTime = [1, 2, 3, 3]
let endTime = [3, 4, 5, 6]
let profit = [50, 10, 40, 70]

;(startTime = [1, 2, 3, 4, 6]),
  (endTime = [3, 5, 10, 6, 9]),
  (profit = [20, 20, 100, 70, 60])

;(startTime = [1, 1, 1]), (endTime = [2, 3, 4]), (profit = [5, 6, 4])

console.log(jobScheduling(startTime, endTime, profit))
