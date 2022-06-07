/*
 * @lc app=leetcode.cn id=731 lang=javascript
 *
 * [731] 我的日程安排表 II
 */

// @lc code=start

var MyCalendarTwo = function () {
  this.map = {}
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  this.map[start] = (this.map[start] || 0) + 1
  this.map[end] = (this.map[end] || 0) - 1

  let active = 0
  for (const v of Object.values(this.map)) {
    active += v
    if (active >= 3) {
      this.map[start]--
      this.map[end]++

      if (this.map[start] === 0) {
        delete this.map[start]
      }
      return false
    }
  }
  return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

let mc = new MyCalendarTwo()
let list = [
  [10, 20],
  [50, 60],
  [10, 40],
  [5, 15],
  [5, 10],
  [25, 55],
]
list.forEach(v => {
  console.log(mc.book(...v))
})
