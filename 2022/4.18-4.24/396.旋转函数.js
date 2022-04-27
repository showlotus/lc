/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let n = nums.length;
  let sum = (prev, curr) => prev + curr;
  let numSum = nums.reduce(sum, 0);
  let f0 = nums.reduce((prev, curr, i) => {
    return prev + curr * i;
  }, 0);

  if (n === 1) return f0;

  let max = f0;
  for (let i = 1; i < n; i++) {
    let f1 = f0 + numSum - n * nums[n - i];
    max = Math.max(max, f1);
    f0 = f1;
  }
  return max;
};
// @lc code=end
var maxRotateFunction_time_limit = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i, cnt = 0; cnt < n; cnt++) {
      sum += j * nums[cnt];
      j = (j + 1) % n;
    }
    max = Math.max(max, sum);
  }
  return max;
};

var nums = [4, 3, 2, 6];
nums = [100];
nums = [100, 89, 90];
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(maxRotateFunction(nums));
