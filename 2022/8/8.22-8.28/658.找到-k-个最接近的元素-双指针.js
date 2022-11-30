/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const n = arr.length
  let left = 0
  let right = n - 1
  let deleteNums = n - k
  while (deleteNums > 0) {
    const diffL = Math.abs(arr[left] - x)
    const diffR = Math.abs(arr[right] - x)
    if (diffL === diffR) {
      arr[left] < arr[right] ? right-- : left++
    } else {
      diffL < diffR ? right-- : left++
    }
    deleteNums--
  }
  return arr.slice(left, k + 1)
}
// @lc code=end
var arr = [1, 2, 3, 4, 5],
  k = 4,
  x = 4

var res = findClosestElements(arr, k, x)
console.log(res)
