/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /* 排序后，查找索引与当前值不同的数 */
  nums.sort((a, b) => a - b)
  let res = nums.findIndex((item, i) => item !== i)
  return res > -1 ? res : nums.length
};

missingNumber = function (nums) {
  /* 前n项求和 - 整个数组之和 */
  return nums.length * (nums.length + 1) / 2 - nums.reduce((prev, curr) => {
    return prev + curr
  }, 0)
};

let nums = [3, 0, 1]
nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
nums = [0, 1]
console.log(missingNumber(nums))
