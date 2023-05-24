/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0
  let i = 0
  let res = Number.MAX_VALUE
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      res = Math.min(res, j - i + 1)
      sum -= nums[i++]
    }
  }
  return res === Number.MAX_VALUE ? 0 : res
}

let target = 7
let nums = [2, 3, 1, 2, 4, 3]

// target = 11
// nums = [1, 1, 1, 1, 1, 1, 1, 1]

// target = 11
// nums = [1, 2, 3, 4, 5]

const res = minSubArrayLen(target, nums)
console.log(res)
