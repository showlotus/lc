/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 10;
  } else {
    let total = 10;
    for (let i = 2; i <= n; ++i) {
      total += (9 * factorial(9)) / factorial(10 - i);
    }
    return total;
  }
};

function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; ++i) {
    res *= i;
  }
  return res;
}
// @lc code=end
var n = 2;
var n = 1;
var n = 3;

console.log(countNumbersWithUniqueDigits(n));
