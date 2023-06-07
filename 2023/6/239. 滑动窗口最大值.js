/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  const res = []
  const stack = []
  for (let i = 0; i < k; i++) {
    while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop()
    }
    stack.push(i)
  }

  res.push(nums[stack[0]])
  for (let i = k; i < n; i++) {
    while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop()
    }
    while (stack.length && stack[0] < i - k + 1) {
      stack.shift()
    }
    stack.push(i)
    res.push(nums[stack[0]])
  }

  return res
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

nums = [1, 3, -1, -3, 15, 3, 6, 7]

nums = [1, 2]
k = 1

const res = maxSlidingWindow(nums, k)
console.log(res)
