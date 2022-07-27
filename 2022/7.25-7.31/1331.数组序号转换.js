/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortArr = arr.slice().sort((a, b) => a - b)
  const map = new Map()
  let order = 1
  sortArr.forEach(v => {
    if (!map.has(v)) {
      map.set(v, order++)
    }
  })

  return arr.map(v => map.get(v))
}
// @lc code=end

var arr = [40, 10, 20, 30]
arr = [100, 100, 100]
arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]

var res = arrayRankTransform(arr)

console.log(res)
