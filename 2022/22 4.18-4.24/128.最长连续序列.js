/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let map = new Map();
  let res = 0;
  for (let v of nums) {
    if (!map.has(v)) {
      map.set(v, 1);
    }
  }

  for (let v of nums) {
    if (map.has(v - 1)) continue;

    let next = v;
    while (map.has(next)) {
      next++;
    }
    res = Math.max(res, next - v);
  }
  return res;
};
// @lc code=end
var nums = [100, 4, 200, 1, 3, 1, 2];
nums = [1, 2, 4];

console.log(longestConsecutive(nums));
