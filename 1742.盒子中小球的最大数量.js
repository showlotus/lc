/*
 * @lc app=leetcode.cn id=1742 lang=javascript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  // O(N * logN) O(logN)
  let maxNum = 0
  const count = {}
  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = getSum(i)
    if (!count[sum]) {
      count[sum] = 0
    }
    count[sum]++
    maxNum = Math.max(maxNum, count[sum])
  }
  return maxNum
}

function getSum(n) {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

// @lc code=end
let lowLimit = 1
let highLimit = 10

lowLimit = 5
highLimit = 150

let res = countBalls(lowLimit, highLimit)
console.log(res)
