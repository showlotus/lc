/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function sumOfArr(arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  })
}
var kWeakestRows = function (mat, k) {
  let res = [];
  for (let i = 0; i < mat.length; ++i) {
    res.push({
      sum: sumOfArr(mat[i]),
      index: i
    })
  }
  res.sort((a, b) => a.sum - b.sum);
  return res.slice(0, k).map(v => v.index);
};
// @lc code=end

let mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  k = 3
console.log(kWeakestRows(mat, k))
