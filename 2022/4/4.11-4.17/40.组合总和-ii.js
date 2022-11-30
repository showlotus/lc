/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let len = candidates.length;
  candidates.sort((a, b) => a - b);
  let sequence = [];
  const dfs = (remaining, idx) => {
    if (remaining === 0) {
      res.push(sequence.slice());
      return;
    }

    if (remaining < candidates[idx] || idx === len) return;

    for (let i = idx; i < len; ++i) {
      if (i > idx && candidates[i - 1] === candidates[i]) {
        continue;
      }

      sequence.push(candidates[i]);

      dfs(remaining - candidates[i], i + 1);

      sequence.pop();
    }
  };

  dfs(target, 0);
  return res;
};
// @lc code=end
var candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
candidates = [2, 5, 2, 1, 2];
target = 5;

candidates = [10, 1, 2, 7, 6, 1, 5];
target = 8;

// candidates = [2, 5, 2, 1, 2];
// target = 5;

console.log(combinationSum2(candidates, target));
