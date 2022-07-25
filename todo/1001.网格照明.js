/*
 * @lc app=leetcode.cn id=1001 lang=javascript
 *
 * [1001] 网格照明
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (n, lamps, queries) {
  /**
   * 1. 定义一个二维数组 grid 记录当前单元格被照亮的次数
   * 2. 遍历 lamps，给每个灯照亮的位置[i,j]，grid[i][j] + 1
   * 3. 遍历 queries，对于第k个查询，若 grid[queries[k][0]][queries[k][1]] > 0，
   *    则 ans[k] = 1，否则 ans[k] = 0
   *    若 queries[k] 的周围有灯（lamps.includes(l => l.toString() === [i,j].toString())，
   *    则将该灯照亮的位置[i,j]，grid[i][j] - 1
   *    最后将该灯从 lamps 中移除，注意：该灯有可能在 lamps 出现多次
   *    lamps.forEach((l, index) => {
   *      if (l.toString() === [i,j].toString()) {
   *        lamps.splice(index, 1)
   *      }
   *    })
   */

  // 切换灯四个方向的照亮区域
  const toggleLight = function (n, [x, y], isOpen) {
    // 横向，将[x,y]处增加，后续方向从[x,y]的两临端开始
    for (let i = y, j = y + 1; i >= 0 || j < n; --i, ++j) {
      i >= 0 && (grid[x][i] = isOpen)
      j < n && (grid[x][j] = isOpen)
    }

    // 纵向
    for (let i = x - 1, j = x + 1; i >= 0 || j < n; --i, ++j) {
      i >= 0 && (grid[i][y] = isOpen)
      j < n && (grid[j][y] = isOpen)
    }


    // 主对角线
    for (let i1 = x - 1, j1 = y - 1, i2 = x + 1, j2 = y + 1; (i1 >= 0 && j1 >= 0) || (i2 < n && j2 < n); --i1, --j1, ++i2, ++j2) {
      i1 >= 0 && j1 >= 0 && (grid[i1][j1] = isOpen)
      i2 < n && j2 < n && (grid[i2][j2] = isOpen)
    }

    // 次对角线
    for (let i1 = x + 1, j1 = y - 1, i2 = x - 1, j2 = y + 1; (i1 < n && j1 >= 0) || (i2 >= 0 && j2 < n); ++i1, --j1, --i2, ++j2) {
      i1 < n && j1 >= 0 && (grid[i1][j1] = isOpen)
      i2 >= 0 && j2 < n && (grid[i2][j2] = isOpen)
    }
  }

  // 关闭指定位置四周的灯
  const closeAroundLight = function (n, [x, y]) {
    // 先保存目标位置是否被照亮
    ans.push(grid[x][y])
    for (let i = Math.max(x - 1, 0); i <= x + 1 && i < n; ++i) {
      for (let j = Math.max(y - 1, 0); j <= y + 1 && j < n; ++j) {
        const key = `${ i },${ j }`
        if (lightMap.has(key)) {
          // 如果该位置有灯，则关闭该灯影响的区域
          toggleLight(n, [i, j], 0)

          // 并移除这个灯
          lightMap.delete(key)
        } else {
          grid[i][j] = 0
        }
      }
    }
  }


  let grid = new Array(n).fill(0).map(v => Array.from({ length: n }).fill(v))
  let lightMap = new Map() // 用哈希表存储灯的位置
  lamps.forEach(([i, j]) => {
    toggleLight(n, [i, j], 1)
    let key = `${ i },${ j }`
    if (!lightMap.has(key)) {
      lightMap.set(key, 1)
    }
  })

  let ans = []

  queries.forEach(([i, j]) => {
    closeAroundLight(n, [i, j])

    // 重新遍历当前剩余的灯，并设置其照亮的区域
    for (let key of lightMap.keys()) {
      toggleLight(n, key.split(',').map(v => +v), 1)
    }
  })
  return ans
};
// @lc code=end

var n = 5, lamps = [[0, 0], [4, 4]], queries = [[1, 1], [1, 0]]

n = 5, lamps = [[0, 0], [0, 4]], queries = [[0, 4], [0, 1], [1, 4]]

n = 5, lamps = [[0, 0], [4, 4]], queries = [[1, 1], [1, 1]]

console.log(gridIllumination(n, lamps, queries))
