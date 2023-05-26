/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right--]
    } else {
      ++left
    }
  }
  return left
}

let nums = [3, 2, 2, 3]
let val = 3

const res = removeElement(nums, val)
console.log(nums, res)
