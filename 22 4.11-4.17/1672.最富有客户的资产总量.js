/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxAccount = 0;
  const sum = (prev, curr) => prev + curr;
  accounts.forEach(list => {
    maxAccount = Math.max(list.reduce(sum, 0), maxAccount);
  });
  return maxAccount;
};
// @lc code=end
var accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
