/*
 * @lc app=leetcode.cn id=2437 lang=javascript
 *
 * [2437] 有效时间的数目
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const [h, m] = time.split(":")
  const computeH = str => {
    // 1. XY
    if (/\d{2}/.test(str)) {
      return 1
    }
    // 2. ?X
    else if (/\?[0-3]/.test(str)) {
      // 2.1 => 0 <= X <= 3
      return 3
    } else if (/\?[4-9]/.test(str)) {
      // 2.2 => X > 3
      return 2
    }
    // 3. X?
    else if (/[0-1]\?/.test(str)) {
      // 3.1 => 0 <= X <= 1
      return 10
    } else if (/[2-9]\?/.test(str)) {
      // 3.2 => X > 1
      return 4
    }
    // 4. ??
    else {
      return 24
    }
  }

  const computeM = str => {
    // 1. XY
    if (/\d{2}/.test(str)) {
      return 1
    } else if (/\?\d/.test(str)) {
      // 2. ?X
      return 6
    } else if (/\d\?/.test(str)) {
      // 3. X?
      return 10
    } else {
      // 4. ??
      return 60
    }
  }

  return computeH(h) * computeM(m)
}
// @lc code=end

let time = "??:??"
time = "?0:1?"

const res = countTime(time)
console.log(res)
