/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = []
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (nums[i] ** 2 <= nums[j] ** 2) {
      res.unshift(nums[j--] ** 2)
    } else {
      res.unshift(nums[i++] ** 2)
    }
  }
  return res
}

let nums = [-4, -1, 0, 3, 10]
nums = [-7, -3, 2, 3, 11]
nums = [-1, 0]

const res = sortedSquares(nums)
console.log(res)
