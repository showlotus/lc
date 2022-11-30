/*
 * @lc app=leetcode.cn id=1653 lang=javascript
 *
 * [1653] 使字符串平衡的最少删除次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let len = s.length;
  if (len === 1) return 0;
  let beforeB = new Array(len).fill(0);
  let afterA = new Array(len).fill(0);
  for (let i = 1, j = len - 2; i < len; i++, j--) {
    beforeB[i] = beforeB[i - 1] + (s[i - 1] === "b" ? 1 : 0);
    afterA[j] = afterA[j + 1] + (s[j + 1] === "a" ? 1 : 0);
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    min = Math.min(min, beforeB[i] + afterA[i]);
  }
  return min;
};
// @lc code=end
var s = "bbaaaaabb";
// s = "aababbab";
// s = "ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa";
// s = "abbba";
console.log(minimumDeletions(s));
