/*
 * @lc app=leetcode.cn id=1769 lang=javascript
 *
 * [1769] 移动所有球到每个盒子所需的最小操作数
 */

// @lc code=start
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length
  let left = +boxes[0]
  let right = 0
  let operation = 0
  for (let i = 1; i < n; i++) {
    if (boxes[i] === "1") {
      right++
      operation += i
    }
  }

  const res = new Array(n).fill(0)
  res[0] = operation
  for (let i = 1; i < n; i++) {
    operation += left - right
    if (boxes[i] === "1") {
      left++
      right--
    }
    res[i] = operation
  }
  return res
}
// @lc code=end
let boxes = "110"
// boxes = "001011"

let res = minOperations(boxes)
console.log(res)
