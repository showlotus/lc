/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /* 
    分为9块，每块索引区间为 0<=n<=8 [Math.floor(n/3) * 3, (n % 3) * 3]  --> [Math.floor(n/3) * 3 + 2, (n % 3) * 3 + 2]
  */
  let n = 0
  while (n < 9) {
    let x = Math.floor(n / 3) * 3
    let y = (n % 3) * 3
    let map = new Map()
    for (let i = x; i <= x + 2; i++) {
      for (let j = y; j <= y + 2; j++) {
        if (board[i][j] !== '.') {
          /* 判断每一区块内是否有重复的数 */
          if (map.has(board[i][j])) {
            return false
          } else {
            /* 判断该行是否有，与当前数相同的数 */
            for (let m = i + 1; m < 9; m++) {
              if (board[m][j] === board[i][j]) {
                return false
              }
            }
            /* 判断该列是否有，与当前数相同的数 */
            for (let n = j + 1; n < 9; n++) {
              if (board[i][n] === board[i][j]) {
                return false
              }
            }
            map.set(board[i][j], 1)
          }
        }
      }
    }
    n++
  }
  return true
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(board))
