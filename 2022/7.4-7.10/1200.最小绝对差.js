/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)

  let res = []
  const n = arr.length
  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < n; ++i) {
    let currDiff = arr[i] - arr[i - 1]
    if (currDiff < minDiff) {
      minDiff = currDiff
      res = [[arr[i - 1], arr[i]]]
    } else if (currDiff === minDiff) {
      res.push([arr[i - 1], arr[i]])
    }
  }

  return res
}
// @lc code=end
