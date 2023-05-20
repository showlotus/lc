/*
 * @lc app=leetcode.cn id=2437 lang=javascript
 *
 * [2437] 有效时间的数目
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  // 回溯
  let res = 0
  time = time.split("")
  const dfs = (arr, pos) => {
    if (pos === arr.length) {
      if (isLegalTime(arr.join(""))) {
        res++
      }
      return
    }

    if (arr[pos] === "?") {
      for (let i = 0; i <= 9; i++) {
        arr[pos] = i
        dfs(arr, pos + 1)
        arr[pos] = "?"
      }
    } else {
      dfs(arr, pos + 1)
    }
  }

  dfs(time, 0)
  return res
}

// 是否是合法时间
const isLegalTime = time => {
  return /([0-1][0-9]|2[0-3]):[0-5][0-9]/.test(time)
}
// @lc code=end

let time = "??:??"
// time = "?0:1?"

const res = countTime(time)

console.log(res)
