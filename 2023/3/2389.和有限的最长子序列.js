/*
 * @lc app=leetcode.cn id=2389 lang=javascript
 *
 * [2389] 和有限的最长子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // 先将数组正序排序
  nums.sort((a, b) => a - b)
  // 求前缀和
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  const l = queries.length
  const res = new Array(l).fill(0)
  for (let i = 0; i < l; i++) {
    // 对 preSum 进行二分查找
    // 查找小于等于 queries[i] 的最大下标
    res[i] = findMaxSeqs(preSum, queries[i])
  }
  return res
}

const findMaxSeqs = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left - 1
}
// @lc code=end
let nums = [4, 5, 2, 1]
let queries = [3, 10, 21]

nums = [2, 3, 4, 5]
queries = [1]

const res = answerQueries(nums, queries)
console.log(res)

// console.log(findMaxSeqs([0, 1, 3, 7, 12], 3))
// console.log(findMaxSeqs([0, 1, 3, 7, 12], 10))
// console.log(findMaxSeqs([0, 1, 3, 7, 12], 21))
