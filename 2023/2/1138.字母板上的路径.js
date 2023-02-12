/*
 * @lc app=leetcode.cn id=1138 lang=javascript
 *
 * [1138] 字母板上的路径
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let x = 0
  let y = 0
  // 下一个点位于当前点的左侧，优先执行 L ，再执行 U/D
  // 下一个点位于当前点的右侧，优先执行 U/D ，再执行 R
  // 最后的执行顺序为：L -> U -> D -> R
  let res = ""
  for (const char of target) {
    const [x1, y1] = getLocation(char)
    if (y1 < y) {
      res += "L".repeat(y - y1)
    }
    if (x1 < x) {
      res += "U".repeat(x - x1)
    }
    if (x1 >= x) {
      res += "D".repeat(x1 - x)
    }
    if (y1 >= y) {
      res += "R".repeat(y1 - y)
    }
    x = x1
    y = y1
    res += "!"
  }
  return res
}

const getLocation = char => {
  const idx = char.codePointAt(0) - "a".charCodeAt(0)
  return [Math.floor(idx / 5), idx % 5]
}
// @lc code=end
let target = "leet"
target = "code"
// target = "xyzcd"

const res = alphabetBoardPath(target)
console.log(res)
