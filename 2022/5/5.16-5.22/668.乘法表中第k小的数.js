/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1;
  let right = m * n;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let count = Math.floor(mid / n) * n;
    for (let i = Math.floor(mid / n) + 1; i <= m; i++) {
      count += Math.min(Math.floor(mid / i), n);
    }
    if (count >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end
var m = 3,
  n = 3,
  k = 5;
(m = 2), (n = 3), (k = 6);
(m = 5), (n = 5), (k = 10);
console.log(findKthNumber(m, n, k));
