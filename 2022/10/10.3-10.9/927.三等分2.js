/*
 * @lc app=leetcode.cn id=927 lang=javascript
 *
 * [927] 三等分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (arr) {
  // ! 超出32位后数据溢出
  const n = arr.length
  const preSum = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = (preSum[i] << 1) + arr[i]
  }
  // 区间 [i, j] 二进制的值为 preSum[j + 1] - (preSum[i] << (j - i + 1))
  for (let i = 0; i < n - 2; i++) {
    // [0, i]
    const s1 = preSum[i + 1]
    for (let j = i + 2; j < n; j++) {
      // [i + 1, j - 1]
      const s2 = preSum[j] - (preSum[i + 1] << (j - i - 1))
      if (s2 > s1) {
        break
      } else if (s2 === s1) {
        // [j, n - 1]
        const s3 = preSum[n] - (preSum[j] << (n - j))
        if (s3 === s2) {
          return [i, j]
        }
      }
    }
  }
  return [-1, -1]
}
// @lc code=end
let arr = [1, 0, 1, 0, 1]
arr = [1, 1, 0, 0, 1]
arr = [1, 1, 0, 1, 1]
// arr = [1, 1, 0, 1]
// arr = [0, 1, 0, 1, 1]
arr = [
  0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0,
  0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0
]
let res = threeEqualParts(arr)
console.log(res)
