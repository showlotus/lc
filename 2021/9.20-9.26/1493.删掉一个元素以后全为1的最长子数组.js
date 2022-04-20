/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = 0
  let firstSum = 0
  for (let i = 0; i < nums.length; i++) {
    while (i < nums.length && nums[i] === 0) i++;
    let currSum = 0
    while (i < nums.length && nums[i] !== 0) {
      i++
      currSum++
    }
    if (i === nums.length) i--
    /* nums[i] === 0 */
    if (i + 1 <= nums.length) {
      if (nums[i + 1] === 0) {
        max = Math.max(firstSum + currSum, max)
        firstSum = 0
      } else {
        max = Math.max(firstSum + currSum, max)
        firstSum = currSum
      }
    } else {
      max = Math.max(currSum, max)
    }
  }
  return max === nums.length ? max - 1 : max
};

let nums = [1, 1, 0, 1]

nums = [1, 1, 0, 0, 1, 1, 1, 0, 1]
nums = [1, 0, 0, 1, 1]
nums = [1, 1, 1]

console.log(longestSubarray(nums))
