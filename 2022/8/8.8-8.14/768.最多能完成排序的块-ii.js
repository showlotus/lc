/*
 * @lc app=leetcode.cn id=768 lang=javascript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sortedArr = arr.slice(0).sort((a, b) => a - b)
  const n = arr.length
  const map = new Map()
  let maxChunk = 0
  for (let i = 0; i < n; i++) {
    const x = sortedArr[i]
    const y = arr[i]
    map.set(x, (map.get(x) || 0) + 1)
    if (map.get(x) === 0) {
      map.delete(x)
    }
    map.set(y, (map.get(y) || 0) - 1)
    if (map.get(y) === 0) {
      map.delete(y)
    }

    if (map.size === 0) {
      maxChunk++
    }
  }
  return maxChunk
}
// @lc code=end
var arr = [5, 4, 3, 2, 1]
arr = [2, 1, 3, 4, 4]
arr = [2]
arr = [0, 0, 1, 1, 1]

var res = maxChunksToSorted(arr)

console.log(res)
