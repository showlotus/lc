/*
 * @lc app=leetcode.cn id=731 lang=javascript
 *
 * [731] 我的日程安排表 II
 */

// @lc code=start

var MyCalendarTwo = function () {
  this.tree = new Map()
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  const update = (start, end, val, left, right, idx) => {
    if (right < start || start > end) {
      return
    }

    if (!this.tree.has(idx)) {
      this.tree.set(idx, [0, 0])
    }

    if (start <= left && right <= end) {
      this.tree.get(idx)[0] += val
      this.tree.get(idx)[1] += val
    } else {
      const mid = (left + right) >> 1
      update(start, end, val, left, mid, 2 * idx)
      update(start, end, val, left, mid + 1, 2 * idx + 1)
      if (!this.tree.has(2 * idx)) {
        this.tree.set(2 * idx, [0, 0])
      }
      if (!this.tree.has(2 * idx + 1)) {
        this.tree.set(2 * idx + 1, [0, 0])
      }
      this.tree.get(idx)[0] =
        this.tree.get(idx)[1] +
        Math.max(this.tree.get(2 * idx)[0], this.tree.get(2 * idx + 1)[0])
    }
  }

  update(start, end - 1, 1, 0, 10 ** 9, 1)

  if (!this.tree.has(1)) {
    this.tree.set(1, [0, 0])
  }

  if (this.tree.get(1)[0] > 2) {
    update(start, end - 1, -1, 0, 10 ** 9, 1)
    return false
  }

  return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
