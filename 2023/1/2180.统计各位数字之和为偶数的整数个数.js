/*
 * @lc app=leetcode.cn id=2180 lang=javascript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let res = 0
  for (let i = 1; i <= num; i++) {
    if (sumIsEven(i)) {
      res++
    }
  }
  return res
}

const sumIsEven = n => {
  let count = 0
  while (n > 0) {
    if ((n % 10) % 2 === 1) {
      count++
    }
    n = Math.floor(n / 10)
  }
  return count % 2 === 0
}
// @lc code=end
let num = 4
num = 30
num = 2

const res = countEven(num)
console.log(res)
