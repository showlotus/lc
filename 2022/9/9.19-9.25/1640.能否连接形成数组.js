/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const map = new Map()
  pieces.forEach(v => {
    map.set(v[0], v)
  })
  for (let i = 0, len = arr.length; i < len; i++) {
    if (!map.has(arr[i])) {
      return false
    } else if (map.get(arr[i]).length) {
      const piece = map.get(arr[i])
      if (!compareArr(arr, i, piece)) {
        return false
      }
      i += piece.length - 1
    }
  }
  return true
}

/**
 *
 * @param {number[]} arr 原数组
 * @param {number} start 开始索引
 * @param {number} end 结束索引
 * @param {number[]} targetArr 要对比的数组
 */
function compareArr(arr, start, targetArr) {
  const l1 = arr.length
  const l2 = targetArr.length
  for (let i = start, j = 0; i < l1 && j < l2; i++, j++) {
    if (arr[i] !== targetArr[j]) {
      return false
    }
  }
  return true
}
// @lc code=end
let arr = [15, 88],
  pieces = [[88], [15]]
// ;(arr = [49, 18, 16]), (pieces = [[16, 18, 49]])
// ;(arr = [91, 4, 64, 78]), (pieces = [[78], [4, 64], [91, 2]])
// ;(arr = [97, 80, 56, 85, 60, 33, 26, 23, 99, 98, 19, 34, 30, 66]),
//   (pieces = [
//     [98, 19],
//     [23, 99],
//     [97, 80, 56, 85, 60],
//     [33, 26],
//     [34],
//     [30, 66]
//   ])
// ;(arr = [91]), (pieces = [[78], [4, 64], [91, 2]])

let res = canFormArray(arr, pieces)

console.log(res)
// console.log(compareArr(arr, 3, [85, 61]))
