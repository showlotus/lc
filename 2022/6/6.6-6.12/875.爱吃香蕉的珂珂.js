/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1
  let right = Math.max(...piles)
  let k = right
  while (left < right) {
    let speed = left + ((right - left) >> 1)
    let hour = 0
    piles.forEach(v => {
      hour += Math.ceil(v / speed)
    })
    if (hour > h) {
      left = speed + 1
    } else {
      right = speed
      k = speed
    }
  }
  return k
}
// @lc code=end

var piles = [30, 11, 23, 4, 20]
var h = 5

piles = [30, 11, 23, 4, 20]
h = 6

piles = [3, 6, 7, 11]
h = 8

var res = minEatingSpeed(piles, h)

console.log(res)
