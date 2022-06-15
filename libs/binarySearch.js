// 大于等于 target 的最小下标
function binarySearchMinMoreThanOrEqualIndex(nums, end, target) {
  let left = 0,
    right = end
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

// 小于 target 的最小下标
function binarySearchMaxLessThanIndex(nums, end, target) {
  return binarySearchMinMoreThanOrEqualIndex(nums, end, target) - 1
}

// 大于 target 的最小下标
function binarySearchMinMoreThanIndex(nums, end, target) {
  let left = 0,
    right = end
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

// 小于等于 target 的最大下标
function binarySearchMaxLessThanEqualIndex(nums, end, target) {
  return binarySearchMinMoreThanIndex(nums, end, target) - 1
}

let nums = new Array(10)
  .fill(10)
  .map(v => (Math.random() * v) | 0)
  .sort((a, b) => a - b)
// nums = [0, 1, 2, 2, 2, 3, 4, 6, 7, 9]
let i1 = binarySearchMinMoreThanOrEqualIndex(nums, 9, 12)
let i2 = binarySearchMinMoreThanIndex(nums, 9, 6)
console.log(nums)
console.log("index1:", i1, ", value:", nums[i1])
console.log("index2:", i2, ", value:", nums[i2])
