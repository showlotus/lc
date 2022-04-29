/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length === 0) return 0;
  return reversePairsRecursive(nums, 0, nums.length - 1);
};

function reversePairsRecursive(nums, left, right) {
  if (left === right) {
    return 0;
  } else {
    const mid = left + ((right - left) >> 1);
    const n1 = reversePairsRecursive(nums, left, mid);
    const n2 = reversePairsRecursive(nums, mid + 1, right);
    let res = n1 + n2;

    // 左区间: [left, mid]
    // 右区间: [mid + 1, right]

    let i = left;
    let j = mid + 1;
    while (i <= mid) {
      while (j <= right && nums[i] > 2 * nums[j]) {
        j++;
      }
      res += j - mid - 1;
      i++;
    }

    const sorted = new Array(right - left + 1);
    let p1 = left;
    let p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = nums[p2++];
      } else if (p2 > right) {
        sorted[p++] = nums[p1++];
      } else {
        if (nums[p1] < nums[p2]) {
          sorted[p++] = nums[p1++];
        } else {
          sorted[p++] = nums[p2++];
        }
      }
    }

    for (let k = 0; k < sorted.length; k++) {
      nums[left + k] = sorted[k];
    }

    return res;
  }
}
// @lc code=end
var nums = [1, 3, 2, 3, 1];
nums = [1, 2, 4, 3, 7, 3, 1, 0];
nums = [2, 4, 3, 5, 1];
// nums = [1, 2];
// nums = [5, 4, 3, 2, 1];
console.log(reversePairs(nums));
