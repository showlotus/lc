/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  // 向中位数靠拢
  nums.sort((a, b) => a - b);

  let len = nums.length;
  let mid;
  if (len % 2 === 1) {
    mid = nums[(len - 1) / 2];
  } else {
    mid = (nums[len / 2 - 1] + nums[len / 2]) >> 1;
  }

  return nums.reduce((prev, curr) => {
    return prev + Math.abs(mid - curr);
  }, 0);
};
// @lc code=end
var nums = [1, 2, 3];
nums = [1, 10, 2, 9];
// nums = [1, 2, 3, 5, 5, 5, 9, 10, 11];
// nums = [1, 2];
console.log(minMoves2(nums));
