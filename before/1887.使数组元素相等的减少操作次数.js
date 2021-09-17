/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let diff = []
  for (let i = 0; i < nums.length - 1; ++i) {
    diff[i] = nums[i + 1] - nums[i]
  }
  let count = 0
  let len = diff.length
  for (let i = len - 1; i >= 0; --i) {
    if (diff[i] > 0) {
      count += len - i
    }
  }
  return count
};

let nums = [1, 4, 2, 2, 2, 3]
nums = [1, 1, 2, 2, 3]
nums = [5]
console.log(reductionOperations(nums))
