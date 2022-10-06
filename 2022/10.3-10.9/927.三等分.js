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
  const oneTotals = arr.reduce((sum, curr) => sum + curr, 0)
  if (oneTotals % 3 !== 0) {
    return [-1, -1]
  }
  if (oneTotals === 0) {
    return [0, 2]
  }

  let firstOne, secondOne, thirdOne
  let currOneNums = 0
  const partOneNums = oneTotals / 3
  const n = arr.length
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      if (currOneNums === 0) {
        firstOne = i
      } else if (currOneNums === partOneNums) {
        secondOne = i
      } else if (currOneNums === partOneNums * 2) {
        thirdOne = i
      }
      currOneNums++
    }
  }

  const len = n - thirdOne
  if (firstOne + len <= secondOne && secondOne + len <= thirdOne) {
    let i = 0
    while (thirdOne + i < n) {
      if (
        arr[firstOne + i] !== arr[secondOne + i] ||
        arr[firstOne + i] !== arr[thirdOne + i]
      ) {
        return [-1, -1]
      }
      i++
    }
    return [firstOne + len - 1, secondOne + len]
  }
  return [-1, -1]
}
// @lc code=end
let arr = [1, 0, 1, 0, 1]
arr = [1, 1, 0, 0, 1]
arr = [1, 1, 0, 1, 1]
arr = [0, 1, 0, 1, 1]
arr = [1, 1, 0, 1]
// arr = [
//   0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0,
//   1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0,
//   0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1,
//   1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0
// ]
let res = threeEqualParts(arr)
console.log(res)
