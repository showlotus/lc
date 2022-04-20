/*
 * @lc app=leetcode.cn id=689 lang=javascript
 *
 * [689] 三个无重叠子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  let prefixSum = [0]
  nums.forEach((item, i) => {
    prefixSum[i + 1] = prefixSum[i] + item
  })
  let left = 0
  let right = k - 1
  let childSumList = []
  while (right < nums.length) {
    childSumList.push({
      sum: prefixSum[right + 1] - prefixSum[left],
      i: left
    })
    left++
    right++
  }
  let res = []
  for (let i = 0; i < childSumList.length; i++) {
    for (let j = i + k; j < childSumList.length; j++) {
      for (let m = j + k; m < childSumList.length; m++) {
        res.push({
          sum: childSumList[i].sum + childSumList[j].sum + childSumList[m].sum,
          order: [i, j, m]
        })
      }
    }
  }
  let target = 0
  let maxSum = Number.MIN_SAFE_INTEGER
  res.forEach(item => {
    if (item.sum > maxSum) {
      maxSum = item.sum
      target = item.order
    }
  })
  return target
};
// @lc code=end


let nums = [1, 2, 1, 2, 6, 7, 5, 1],
  k = 2

nums = [1, 2, 1, 2, 1, 2, 1, 2, 1], k = 2
nums = [1, 2, 2, 2, 1, 2, 1, 2, 1], k = 1
console.log(maxSumOfThreeSubarrays(nums, k))
