/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const oneNums = n => {
    let cnt = 0
    let lastOne = n & 1
    let next = n >> 1
    if (next) {
      return oneNums(next) + lastOne
    }
    return cnt
  }
  return arr.sort((a, b) => {
    let m = oneNums(a)
    let n = oneNums(b)
    return m === n ? a - b : m - n
  })
}
// @lc code=end

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
// arr = [10000, 10000]
// arr = [2, 3, 5, 7, 11, 13, 17, 19]

console.log(sortByBits(arr))
