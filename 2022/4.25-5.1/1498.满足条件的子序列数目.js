/*
 * @lc app=leetcode.cn id=1498 lang=javascript
 *
 * [1498] 满足条件的子序列数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  /**
   * (a + b) mod p = [(a mod p) + (b mod p)] mod p
   * (a * b) mod p = [(a mod p) * (b mod p)] mod p
   */
  nums.sort((a, b) => a - b);
  const MOD = 10 ** 9 + 7;
  let n = nums.length;
  let tmp = new Array(n);
  /**
   * 预处理求 2 ** i ，降低时间复杂度
   * tmp[i] == 2 ** i
   */
  tmp[0] = 1;
  for (let i = 1; i < n; i++) {
    tmp[i] = (tmp[i - 1] << 1) % MOD;
  }

  let res = 0;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      res = (res + tmp[right - left]) % MOD;
      left++;
    }
  }
  return res;
};
// @lc code=end
var nums = [3, 5, 6, 7],
  target = 9;
nums = [2, 3, 3, 4, 6, 7];
target = 12;
console.log(numSubseq(nums, target));
