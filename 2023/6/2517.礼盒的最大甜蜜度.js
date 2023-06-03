/*
 * @lc app=leetcode.cn id=2517 lang=javascript
 *
 * [2517] 礼盒的最大甜蜜度
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b)
  let left = 0
  let right = price[price.length - 1] - price[0]
  while (left < right) {
    const mid = Math.floor((right + left + 1) / 2)
    if (check(mid, price, k)) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}

const check = (m, price, k) => {
  let cnt = 0
  let prev = -Number.MAX_SAFE_INTEGER
  for (let i = 0; i < price.length; i++) {
    if (price[i] - prev >= m) {
      prev = price[i]
      cnt++
    }
  }
  return cnt >= k
}
// @lc code=end
let price = [13, 5, 1, 8, 21, 2]
let k = 3

const res = maximumTastiness(price, k)
console.log(res)
