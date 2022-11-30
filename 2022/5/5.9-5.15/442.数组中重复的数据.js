/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // 正负号标记
  let res = [];
  nums.forEach((v, i, arr) => {
    const abs_v = Math.abs(v);
    if (arr[abs_v - 1] < 0) {
      res.push(abs_v);
    } else {
      arr[abs_v - 1] *= -1;
    }
  });
  return res;
};
// @lc code=end
var nums = [4, 3, 2, 7, 8, 2, 3, 1];
// nums = [1, 1, 2];
// nums = [1];
console.log(findDuplicates(nums));
