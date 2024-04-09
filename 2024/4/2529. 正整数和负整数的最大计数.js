/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const lessThanZeroIdx = findIndexLessThan(0, nums)
  const greaterThanZeroIdx = findIndexGreaterThan(0, nums)
  return Math.max(lessThanZeroIdx + 1, nums.length - greaterThanZeroIdx)
}

/**
 * 找到小于 target 的最大索引
 * @param {number} target
 * @param {number[]} nums
 */
function findIndexLessThan(target, nums) {
  let l = 0
  let r = nums.length
  while (l < r) {
    const mid = Math.floor((r - l) / 2) + l
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l - 1
}

/**
 * 找到大于 target 的最小索引
 * @param {number} target
 * @param {number[]} nums
 */
function findIndexGreaterThan(target, nums) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = Math.floor((r - l) / 2) + l
    if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l
}

let nums = [-2, -1, -1, 1, 2, 3]
let expect_value = 3

// nums = [-3, -2, -1, 0, 0, 1, 2]
// expect_value = 3

// nums = [5, 20, 66, 1314]
// expect_value = 4

// nums = [-5, -4, -3, -2, -1]
// expect_value = 5

nums = [0, 0, 0]
expect_value = 0

console.log(maximumCount(nums), maximumCount(nums) === expect_value)
