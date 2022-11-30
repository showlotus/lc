/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 10 ** 9 + 7
  const n = arr.length
  const left = new Array(n).fill(-1)
  let stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop()
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }

  const right = new Array(n).fill(n)
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop()
    }
    right[i] = stack.length ? stack[stack.length - 1] : n
    stack.push(i)
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    res = (res + (i - left[i]) * (right[i] - i) * arr[i]) % MOD
  }
  return res
}
// @lc code=end

let arr = [3, 1, 2, 4]
// arr = [11, 81, 94, 43, 3, 2]
// arr = [11, 81, 94, 43, 3]
// arr = [1]
let res = sumSubarrayMins(arr)
console.log(res)
