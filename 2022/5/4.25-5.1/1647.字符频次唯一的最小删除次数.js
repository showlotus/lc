/*
 * @lc app=leetcode.cn id=1647 lang=javascript
 *
 * [1647] 字符频次唯一的最小删除次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let cnt = new Array(26).fill(0);
  for (let w of s) {
    cnt[w.codePointAt(0) - "a".codePointAt(0)]++;
  }

  if (cnt.length === 1) return 0;
  let deletions = 0;
  cnt.sort((a, b) => b - a);
  for (let i = 1; i < 26; i++) {
    if (cnt[i] === 0) break;
    while (cnt[i] > 0 && cnt[i] >= cnt[i - 1]) {
      cnt[i]--;
      deletions++;
    }
  }
  return deletions;
};
// @lc code=end

var s = "aaacbcbbcc";
// s = "aab";
// s = "aaa";
// s = "ceabaacb";
// s = "abcabc";
s = "bbcebab";
console.log(minDeletions(s));
