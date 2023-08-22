/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const n = seats.length
  let res = 1
  let prevSeat = -1
  for (let i = 0; i <= n; i++) {
    if (i === n || seats[i] === 1) {
      if (prevSeat < 0 || i === n) {
        // 位于两端的空位，直接更新结果为：当前值 与 当前座位到头/尾的距离 中的最大值
        res = Math.max(res, i - prevSeat - 1)
      } else {
        // 位于中间的空位，更新结果为：当前值 与 两个座位之间的距离除以2 中的最大值
        res = Math.max(res, Math.floor((i - prevSeat) / 2))
      }
      prevSeat = i
    }
  }
  return res
}
// @lc code=end
let seats = [1, 0, 0, 0, 1, 0, 1]
seats = [1, 0, 0, 0]
// seats = [0, 0, 0, 1]
seats = [1, 0, 0, 0, 1, 0, 1]
const res = maxDistToClosest(seats)

console.log(res)
