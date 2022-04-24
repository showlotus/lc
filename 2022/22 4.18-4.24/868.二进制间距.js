/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let res = 0;
  let prevOne = -1;
  let count = 0;
  while (n > 0) {
    let last = n & 1;
    if (last === 1) {
      if (prevOne === -1) {
        prevOne = count;
      } else {
        res = Math.max(count - prevOne, res);
        prevOne = count;
      }
    }
    n >>= 1;
    count++;
  }
  return res;
};
// @lc code=end
var n = 22;
n = 8;
n = 98;
n = 5;
n = 2;
console.log(binaryGap(n));
