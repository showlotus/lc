/*
 * @lc app=leetcode.cn id=2475 lang=javascript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  // 计数，统计每个数的频数，然后从这些频数中任选三个相乘
  // 即为对应三个数可组成的三元组数量，最后求总数量即可
  const countMap = new Map()
  for (const s of nums) {
    countMap.set(s, (countMap.get(s) || 0) + 1)
  }

  const countArr = [...countMap.values()]
  if (countArr.length < 3) {
    return 0
  }
  let res = 0
  const n = countArr.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        res += countArr[i] * countArr[j] * countArr[k]
      }
    }
  }
  return res
}
// @lc code=end
let nums = [4, 4, 2, 2, 3, 3, 3, 5]

const res = unequalTriplets(nums)
console.log(res)
