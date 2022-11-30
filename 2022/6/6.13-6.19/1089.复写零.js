/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const n = arr.length
  let top = 0
  let i = -1
  while (top < n) {
    i++
    if (arr[i] === 0) {
      top += 2
    } else {
      top++
    }
  }
  let j = n - 1
  if (top === n + 1) {
    arr[j] = 0
    j--
    i--
  }
  while (j >= 0) {
    arr[j--] = arr[i]
    if (arr[i] === 0) {
      arr[j--] = arr[i]
    }
    i--
  }
}
// @lc code=end
var duplicateZeros1 = function (arr) {
  const n = arr.length
  let res = []
  let i = 0
  while (res.length < n) {
    if (arr[i] !== 0) {
      res.push(arr[i])
    } else {
      res.push(0, 0)
    }
    i++
  }

  for (let i = 0; i < n; i++) {
    arr[i] = res[i]
  }
}

var arr = [1, 0, 2, 3, 0, 4, 5, 0]
// arr = [1, 2, 0, 0, 3, 0]
arr = [1, 2, 4]
duplicateZeros(arr)

console.log(arr)
