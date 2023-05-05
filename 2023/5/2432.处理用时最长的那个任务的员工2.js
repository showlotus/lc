/*
 * @lc app=leetcode.cn id=2432 lang=javascript
 *
 * [2432] 处理用时最长的那个任务的员工
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let worker = logs[0][0]
  let maxTime = logs[0][1]
  for (let i = 1; i < logs.length; i++) {
    const currTime = logs[i][1] - logs[i - 1][1]
    const currWorker = logs[i][0]
    if (currTime > maxTime || (currTime === maxTime && currWorker < worker)) {
      maxTime = currTime
      worker = currWorker
    }
  }
  return worker
}
// @lc code=end
let n = 10
let logs = [
  [0, 3],
  [2, 5],
  [0, 9],
  [1, 15]
]

n = 26
logs = [
  [1, 1],
  [3, 7],
  [2, 12],
  [7, 17]
]

n = 2
logs = [
  [0, 10],
  [1, 20]
]

// n = 145
// logs = [
//   [114, 5],
//   [115, 7],
//   [50, 9],
//   [105, 11],
//   [18, 13],
//   [47, 16],
//   [48, 18],
//   [39, 19]
// ]

// n = 450
// logs = [
//   [110, 5],
//   [360, 7],
//   [48, 8],
//   [286, 10],
//   [167, 12],
//   [110, 13],
//   [221, 18]
// ]

const res = hardestWorker(n, logs)
console.log(res)
