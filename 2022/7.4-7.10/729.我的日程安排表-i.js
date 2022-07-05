/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function () {
  this.map = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.map.length === 0) {
    this.map.push([start, end])
    return true
  }

  let has = false
  for (let [l, r] of this.map) {
    if (isIntersected(start, end, l, r)) {
      has = true
      break
    }
  }
  if (has) {
    return false
  } else {
    this.map.push([start, end])
    return true
  }
}

function isIntersected(l1, r1, l2, r2) {
  if (r1 === l2 || l1 === r2) return false
  return r2 >= l1 && r1 >= l2
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
