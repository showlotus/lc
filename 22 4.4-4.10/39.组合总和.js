/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let len = candidates.length;

  const dfs = (remaining, combine, idx) => {
    if (remaining < 0 || idx >= len) return;
    if (remaining === 0) {
      res.push(combine);
      return;
    }
    // 不添加当前值
    dfs(remaining, combine, idx + 1);

    // 添加当前值
    let curr = candidates[idx];
    dfs(remaining - curr, [...combine, curr], idx);
  };

  dfs(target, [], 0);

  return res;
};
// @lc code=end
var candidates = [2, 3, 6, 7],
  target = 7;
candidates = [2, 3, 5];
target = 8;
console.log(combinationSum(candidates, target));
