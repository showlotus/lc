/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let deep = 0
  const isDirName = str => /\w+\/$/.test(str)
  for (const log of logs) {
    if (log === "../") {
      deep = Math.max(deep - 1, 0)
    } else if (isDirName(log)) {
      ++deep
    }
  }
  return deep
}
// @lc code=end
var logs = []
logs = ["d1/", "../", "../", "../"]
var res = minOperations(logs)
console.log(res)
