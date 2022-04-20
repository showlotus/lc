/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let len = nums.length;
  if (len === 0) return res;
  let used = new Array(len).fill(false);

  const dfs = (depth, path, used) => {
    if (depth === len) {
      res.push(path);
    }

    for (let i in nums) {
      if (!used[i]) {
        let newUsed = [...used];
        newUsed[i] = true;

        let newPath = [...path, nums[i]];
        dfs(depth + 1, newPath, newUsed);
      }
    }
  };

  dfs(0, [], used);

  return res;
};
// @lc code=end
var nums = [1, 3, 2];
// nums = [0, 1];
// nums = [0, 1, 2, 3];

console.log(permute(nums));
