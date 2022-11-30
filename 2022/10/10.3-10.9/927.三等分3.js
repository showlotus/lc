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
  // ! 超时
  const n = arr.length
  const str = arr.join("")
  for (let i = 0; i < n - 2; i++) {
    // [0, i]
    const s1 = str.slice(0, i + 1)
    for (let j = i + 2; j < n; j++) {
      // [i + 1, j - 1]
      const s2 = str.slice(i + 1, j)
      if (compare(s2, s1) === 1) {
        break
      } else if (compare(s2, s1) === true) {
        // [j, n - 1]
        const s3 = str.slice(j)
        if (compare(s2, s3) === true) {
          return [i, j]
        }
      }
    }
  }
  return [-1, -1]
}

function compare(str1, str2) {
  str1 = str1.replace(/^0+/, "")
  str2 = str2.replace(/^0+/, "")
  if (str1 === str2) {
    return true
  } else if (str1.length > str2.length) {
    return 1
  } else if (str1.length < str2.length) {
    return -1
  } else {
    return false
  }
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
