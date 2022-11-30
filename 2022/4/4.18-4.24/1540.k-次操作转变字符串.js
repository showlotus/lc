/*
 * @lc app=leetcode.cn id=1540 lang=javascript
 *
 * [1540] K 次操作转变字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
  if (s.length !== t.length) return false;

  let sLen = s.length;
  let currStep;
  let counts = new Array(26).fill(0);
  for (let i = 0; i < sLen; i++) {
    currStep = t[i].codePointAt(0) - s[i].codePointAt(0);
    if (currStep === 0) {
      continue;
    }
    if (currStep < 0) {
      currStep += 26;
    }
    counts[currStep]++;
  }

  let maxCount = 0;
  for (let i = 1; i <= 25; i++) {
    maxCount = i + 26 * (counts[i] - 1);
    if (maxCount > k) {
      return false;
    }
  }
  return true;
};
// @lc code=end
var s = "input",
  t = "ouput",
  k = 9;
// (s = "abc"), (t = "bcd"), (k = 10);
// (s = "bcb"), (t = "abb"), (k = 27);
// (s = "acb"), (t = "abb"), (k = 27);
(s = "aab"), (t = "bbb"), (k = 27);
(s = "iqssxdlb"), (t = "dyuqrwyr"), (k = 40);
(s = "abc"), (t = "bcd"), (k = 10);
console.log(canConvertString(s, t, k));
