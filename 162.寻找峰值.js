/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = (l + r) >> 1
    let leftVal = nums[mid - 1] ? nums[mid - 1] : Number.MIN_SAFE_INTEGER
    let rightVal = nums[mid + 1] ? nums[mid + 1] : Number.MIN_SAFE_INTEGER
    if (leftVal < nums[mid] && nums[mid] > rightVal) {
      console.log(nums[mid])
      return mid
    } else if (nums[mid] > rightVal) {
      /* target <= mid */
      r = mid - 1
    } else if (nums[mid] < rightVal) {
      /* target >= mid + 1 */
      l = mid + 1
    }
  }
};

let nums = [1, 2, 3, 1]
nums = [1, 2, 1, 3, 5, 6, 4]
nums = [1, 2, 3, 4, 1]
nums = [1, 0]
nums = [0]

console.log(findPeakElement(nums))
