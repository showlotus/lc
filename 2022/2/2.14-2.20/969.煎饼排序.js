/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let res = []
  const swap = k => {
    for (let i = 0, j = k - 1; i < j; ++i, --j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  for (let i = arr.length - 1; i >= 1; --i) {
    if (arr[i] === i + 1) continue
    let index = arr.findIndex(v => v === i + 1)
    res.push(index + 1)
    swap(index + 1)
    if (index === 0) {
      return res
    } else {
      res.push(i + 1)
      swap(i + 1)
    }
  }
  return res
}
// @lc code=end
var arr = [3, 2, 4, 1]

arr = [1, 2, 3]

arr = [2, 1]

console.log(pancakeSort(arr))
