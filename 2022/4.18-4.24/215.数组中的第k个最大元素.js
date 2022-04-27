/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function partition(nums, left, right) {
  let curr = nums[left];
  let j = left;
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < curr) {
      j++;
      swap(nums, j, i);
    }
  }
  swap(nums, j, left);
  return j;
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

var findKthLargest = function (nums, k) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let target = len - k;

  while (true) {
    let idx = partition(nums, left, right);
    if (idx === target) {
      return nums[idx];
    } else if (idx < target) {
      left = idx + 1;
    } else {
      right = idx - 1;
    }
  }
};
// @lc code=end
var nums = [3, 2, 1, 5, 6, 4];
var k = 2;

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
k = 4;
nums = [1];
k = 1;
console.log(findKthLargest(nums, k));
