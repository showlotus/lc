/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map()
  nums.forEach(s => map.set(s, (map.get(s) || 0) + 1))
  const sortedAr = [...map.entries()].sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })

  return sortedAr.map(([num, cnt]) => new Array(cnt).fill(num)).flat()
}
// @lc code=end
let nums = [1, 1, 2, 2, 2, 3]
// nums = [2, 3, 1, 3, 2]
// nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
// nums = [1]
let res = frequencySort(nums)
console.log(res)
