/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let counts = new Map();
  // 统计字母频数
  for (let w of s) {
    if (counts.has(w)) {
      counts.set(w, counts.get(w) + 1);
    } else {
      counts.set(w, 1);
    }
  }

  let stack = [];
  for (let w of s) {
    // 字母还剩余的个数
    if (stack.includes(w)) {
      counts.set(w, counts.get(w) - 1);
      continue;
    }

    while ((len = stack.length) && (top = stack[len - 1]) > w && (t = counts.get(top)) > 1) {
      stack.pop();
      counts.set(top, t - 1);
    }
    stack.push(w);
  }
  return stack.join("");
};
// @lc code=end
var s = "bcabc";

console.log(smallestSubsequence(s));
