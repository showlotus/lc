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
function adjustHeap(arr, i, end, compare) {
  let largetest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < end && compare(arr[left], arr[end])) {
    largetest = left;
  }

  if (right < end && compare(arr[right], arr[end])) {
    largetest = right;
  }

  if (largetest !== i) {
    [arr[i], arr[largetest]] = [arr[largetest], arr[i]];
    adjustHeap(arr, largetest, end, compare);
  }
  console.log(arr.toString());
}
var findKthLargest = function (nums, k) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let target = len - k;
  let compare = (a, b) => a < b;

  for (let i = (len >> 1) - 1; i >= 0; i--) {
    adjustHeap(nums, i, k, compare);
  }

  console.log(nums);

  for (let j = k + 1; j < len; j++) {
    if (!compare(nums[j], nums[0])) {
      [nums[j], nums[0]] = [nums[0], nums[j]];
      adjustHeap(nums, 0, k, compare);
    }
  }

  console.log(nums);

  return nums[0];
};
// @lc code=end
var nums = [3, 2, 1, 5, 6, 4];
var k = 2;
// k = 6;

// nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// k = 4;
// nums = [1];
// k = 1;
console.log(findKthLargest(nums, k));
