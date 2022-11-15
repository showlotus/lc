/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  let cnt = 0
  for (let i = 0; i < boxTypes.length; i++) {
    if (cnt < truckSize) {
      const nums = Math.min(boxTypes[i][0], truckSize - cnt)
      cnt += nums
      res += nums * boxTypes[i][1]
    } else {
      break
    }
  }
  return res
}
// @lc code=end
let boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9]
]
let truckSize = 10

boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1]
]
truckSize = 1

let res = maximumUnits(boxTypes, truckSize)
console.log(res)
