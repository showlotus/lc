/*
 * @lc app=leetcode.cn id=2446 lang=javascript
 *
 * [2446] 判断两个事件是否存在冲突
 */

// @lc code=start
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  // 将时间转换为分钟，然后比较两个数字区间是否有交集
  event1 = event1.map(transformToMinutes)
  event2 = event2.map(transformToMinutes)
  return event1[0] <= event2[1] && event2[0] <= event1[1]
}

const transformToMinutes = time => {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}
// @lc code=end
let event1 = ["01:15", "02:00"]
let event2 = ["02:00", "03:00"]

;(event1 = ["01:00", "02:00"]), (event2 = ["01:20", "03:00"])
;(event1 = ["10:00", "11:00"]), (event2 = ["14:00", "15:00"])

const res = haveConflict(event1, event2)
console.log(res)
