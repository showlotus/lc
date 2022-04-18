/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let res = [];
  let currNumber = 1;
  for (let i = 0; i < n; i++) {
    res.push(currNumber);
    if (currNumber * 10 <= n) {
      currNumber *= 10;
    } else {
      while (currNumber % 10 === 9 || currNumber + 1 > n) {
        currNumber = Math.floor(currNumber / 10);
      }
      currNumber++;
    }
  }
  return res;
};
// @lc code=end
var n = 23;
n = 10;

console.log(lexicalOrder(n));
