/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let len = s.length
  let t = 2 * numRows - 2
  let m = len % t
  let col
  if (numRows === 1 || len <= numRows) {
    col = 1
  } else {
    let a = Math.floor(len / t) * (numRows - 1)
    let b = m !== 0 ? Math.max(m - numRows, 0) + 1 : 0
    col = a + b
  }

  let arr = new Array(numRows).fill(0).map(() => new Array())
  const dirs = [
    [1, 0], // down
    [-1, 1], // right-top
    [0, 1], // single-line
  ]
  let curr_dir = 0
  let curr_row = 0
  let curr_col = 0
  let cnt = 0
  for (let str of s) {
    arr[curr_row][curr_col] = str
    cnt++
    if (numRows === 1) {
      curr_dir = 2
    } else if (curr_dir === 0 && cnt === numRows) {
      // turn to right-top
      curr_dir = 1
      cnt = 0
    } else if (curr_dir === 1 && cnt === numRows - 1) {
      // turn to down
      curr_dir = 0
      cnt = 1
    }
    const [offsetX, offsetY] = dirs[curr_dir]
    ;[curr_row, curr_col] = [curr_row + offsetX, curr_col + offsetY]
  }
  let res = ""
  for (let row of arr) {
    row.forEach(col => {
      res += col
    })
  }
  return res
}
// @lc code=end
var s = "PAYPALISHIRING",
  numRows = 3
;(s = "1234567890"), (numRows = 4)

console.log(convert(s, numRows))
