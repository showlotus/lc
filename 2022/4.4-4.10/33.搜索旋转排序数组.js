/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  if (n === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) return mid;
    // 前部分有序
    if (nums[0] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 后部分有序
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
// nums = [4, 5, 6, 7, 0, 1, 2];
// target = 3;

// nums = [1];
// target = 0;
console.log(search(nums, target));
