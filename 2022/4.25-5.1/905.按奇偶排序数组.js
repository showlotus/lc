/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const isOdd = n => n % 2 === 1;
const isEven = n => n % 2 === 0;
const swap = (a, b, nums) => ([nums[a], nums[b]] = [nums[b], nums[a]]);
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (isOdd(nums[left]) && isEven(nums[right])) {
      swap(left, right, nums);
    } else if (isOdd(nums[left])) {
      right--;
      continue;
    } else if (isEven(nums[right])) {
      left++;
      continue;
    }
    left++;
    right--;
  }
  return nums;
};
// @lc code=end

var nums = [3, 1, 2, 4];
nums = [0];
nums = [2, 3, 1, 5, 2, 0, 7];

console.log(sortArrayByParity(nums));
