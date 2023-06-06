/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length
  // 遍历行
  const rowMap = new Map()
  for (let i = 0; i < n; i++) {
    const key = grid[i].join()
    rowMap.set(key, (rowMap.get(key) || 0) + 1)
  }

  // 遍历列
  const colMap = new Map()
  for (let i = 0; i < n; i++) {
    let key = ""
    for (let j = 0; j < n; j++) {
      key += grid[j][i]
      if (j !== n - 1) {
        key += ","
      }
    }
    colMap.set(key, (colMap.get(key) || 0) + 1)
  }

  let res = 0
  for (const [key, val] of rowMap.entries()) {
    if (colMap.has(key)) {
      res += colMap.get(key) * val
    }
  }
  return res
}

let grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7]
]

// grid = [
//   [3, 1, 2, 2],
//   [1, 4, 4, 5],
//   [2, 4, 2, 2],
//   [2, 4, 2, 2]
// ]

const res = equalPairs(grid)
console.log(res)
