/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  const n = nums.length + 2
  nums[n - 2] = nums[n - 1] = n + 1
  for (let i = 0; i < n; i++) {
    const s = Math.abs(nums[i])
    if (s > 0 && s <= n) {
      nums[s - 1] = -nums[s - 1]
    }
  }
  const res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }
  return res
}
let nums = [1]
nums = [2, 3]
nums = [2, 3, 4, 1, 6]
let res = missingTwo(nums)
console.log(res)
