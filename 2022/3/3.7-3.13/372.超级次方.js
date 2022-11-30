/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  let res = BigInt(1)
  for (let s of b) {
    res = (Math.pow(parseInt(res), 10) % 1337) * (Math.pow(a, s) % 1337)
  }
  return res
};
// @lc code=end

let a = 2,
  b = [3]
a = 1, b = [4, 3, 3, 8, 5, 2]
a = 2147483647, b = [2, 0, 0]
console.log(superPow(a, b))
