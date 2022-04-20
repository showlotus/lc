/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let len = nums.length;
  if (len === 0) return [];
  let res = [];
  let used = new Array(len).fill(false);

  const dfs = (depth, path) => {
    if (depth === len) {
      res.push(path.slice());
    }

    for (let [idx, i = +idx] in nums) {
      if (used[i]) continue;

      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;

      dfs(depth + 1, path);

      used[i] = false;
      path.pop();
    }
  };
  nums.sort((a, b) => a - b);
  dfs(0, []);
  return res;
};
// @lc code=end

var nums = [1, 1, 2];

console.log(permuteUnique(nums));
