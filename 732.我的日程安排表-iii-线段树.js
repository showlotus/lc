/*
 * @lc app=leetcode.cn id=732 lang=javascript
 *
 * [732] 我的日程安排表 III
 */

// @lc code=start

var MyCalendarThree = function () {
  this.map = {}
}

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  this.map[start] = (this.map[start] || 0) + 1
  this.map[end] = (this.map[end] || 0) - 1

  let res = 0
  let maxBook = 0
  for (const v of Object.values(this.map)) {
    maxBook += v
    res = Math.max(res, maxBook)
  }
  return res
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

var arr = [
  [10, 20],
  [50, 60],
  [10, 40],
  [5, 15],
  [5, 10],
  [25, 55],
]

// arr = [[0, 1000000000]]
// arr = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// arr = [
//   [26, 35],
//   [26, 32],
//   [25, 32],
//   [18, 26],
//   [40, 45],
//   [19, 26],
//   [48, 50],
//   [1, 6],
//   [46, 50],
//   [11, 18],
// ]
let C = new MyCalendarThree()
const res = []
arr.forEach(v => {
  res.push(C.book(...v))
})

console.log(res)
