/*
 * @lc app=leetcode.cn id=1952 lang=javascript
 *
 * [1952] 三除数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  // 每一个数 n 至少有两个除数：1 和 n (自己)
  // 若只有两个除数，那么这个数就是素数
  // 若有第三个除数，那么这个数一定是 n 的平方根
  if (n <= 2) return false;
  let i;
  for (i = 2; i * i < n; ++i) {
    if (n % i === 0 && i * i !== n) {
      return false;
    }
  }
  return i * i === n;
};

// @lc code=end
var n = 4;

n = 17;
n = 18;
// n = 9;
// n = 12;
n = 25;
n = 4;

console.log(isThree(n));
