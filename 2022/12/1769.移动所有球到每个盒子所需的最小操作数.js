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
  const oneNums = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    oneNums[i] = oneNums[i - 1] + Number(boxes[i - 1])
  }
  // 索引 i 前，字符 1 的数量为 oneNums[i] - oneNums[0]
  // 索引 i 后，字符 1 的数量为 oneNums[n] - oneNums[i + 1]

  const left = new Array(n).fill(0)
  const right = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] + oneNums[i] - oneNums[0]
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] + oneNums[n] - oneNums[i + 1]
  }

  const res = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    res[i] = left[i] + right[i]
  }
  return res
}
// @lc code=end
let boxes = "110"
// boxes = "001011"

let res = minOperations(boxes)
console.log(res)
