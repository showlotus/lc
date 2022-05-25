/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let dp = {};
  let k = 0;
  for (let i = 0, len = p.length; i < len; i++) {
    if (i > 0 && isIncrease(p[i - 1], p[i])) {
      k++;
    } else {
      k = 1;
    }
    dp[p[i]] = Math.max(dp[p[i]] || 0, k);
  }

  return Object.values(dp).reduce((prev, curr) => prev + curr, 0);
};

function isIncrease(a, b) {
  const aCode = a.codePointAt(0);
  const bCode = b.codePointAt(0);
  return bCode - aCode === 1 || bCode - aCode === -25;
}
// @lc code=end
var p = "zab";
// p = "cac";
// p = "a";
p = "zaba";
// p = "abaab";
let res = findSubstringInWraproundString(p);
console.log(res);
