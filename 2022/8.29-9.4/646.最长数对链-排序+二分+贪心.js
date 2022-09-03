/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[0] - b[0])
  const res = []
  for (const s of pairs) {
    const [start, end] = s
    if (!res.length || start > res[res.length - 1]) {
      res.push(end)
    } else {
      const idx = binarySearch(res, start)
      res[idx] = Math.min(res[idx], end)
    }
  }
  return res.length
}

// 查找大于target的最小索引
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let mid = (left + right) >> 1
    if (arr[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end
var arr = [
  [1, 2],
  [2, 2.3],
  [2.1, 2.6],
  [3, 4]
]

var res = findLongestChain(arr)
console.log(res)

console.log(
  binarySearch(
    arr.map(v => v[1]),
    3
  )
)
