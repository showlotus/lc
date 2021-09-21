/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length <= 2) return true
  for (let i = 1; i < nums.length; i++) {
    // while(nums[i-1] === nums[i]) i++
    let prev = nums[i] - nums[i - 1]
    /* 处理后续为0，导致趋势丢失的情况，即 [8, 8, 5, 5, 6, 7] */
    while (nums[i] === nums[i + 1]) i++
    if (prev * (nums[i + 1] - nums[i]) < 0) return false
  }
  return true

  /* 差分数组 */
  // let diff = []
  // for (let i = 1; i < nums.length; i++) {
  //   diff[i - 1] = nums[i] - nums[i - 1]
  // }
  // let increase = diff.every(item => item >= 0)
  // let decrease = diff.every(item => item <= 0)
  // return increase || decrease
};
let arr = [1, 2, 3, 3, 4]
arr = [1, 2, 1, 2]
arr = [3, 2, 1, 0]
arr = [1, 1, 0, 2]
arr = [1]
arr = [8, 8, 5, 5, 6, 7]
arr = [11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]
arr = [1, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 2, 2, 2, 1, 1, 1]
console.log(isMonotonic(arr))
