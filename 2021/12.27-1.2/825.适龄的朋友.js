/*
 * @lc app=leetcode.cn id=825 lang=javascript
 *
 * [825] 适龄的朋友
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 * 思路：画图求解，0.5X + 7 < Y <= X，两直线相交构成的平面区域
 * 当 x <= 14 时，无解；
 * 当 14 < x <= 120 时，区域求解。
 */
var numFriendRequests = function (ages) {
  ages.sort((a, b) => a - b)
  let cnt = 0
  let left = 0
  let right = 0
  for (let age of ages) {
    if (age < 15) continue
    while (ages[left] <= 0.5 * age + 7) {
      left++
    }
    while (right + 1 < ages.length && ages[right + 1] <= age) {
      right++
    }
    cnt += right - left
  }
  return cnt
};
// @lc code=end

var ages = [20, 30, 100, 110, 120]

ages = [16, 17, 18]

// ages = [1, 2, 4]

ages = [16, 16, 16, 16]
ages = [16, 16, 16, 15]

console.log(numFriendRequests(ages))
