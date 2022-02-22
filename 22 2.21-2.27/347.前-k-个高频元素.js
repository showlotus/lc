/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map()
  nums.forEach(t => {
    if (map.has(t)) {
      map.set(t, map.get(t) + 1)
    } else {
      map.set(t, 1)
    }
  })
  let res = []
  for (let [key, value] of map.entries()) {
    const head = map.get(res[0])
    const tail = map.get(res[res.length - 1])
    if (res.length === 0 || value <= tail) {
      res.push(key)
    } else if (value > head) {
      res.unshift(key)
    } else {
      for (let i = 0, len = res.length; i < len - 1; ++i) {
        if (map.get(res[i]) >= value && value > map.get(res[i + 1])) {
          res.splice(i + 1, 0, key)
          break
        }
      }
    }
    if (res.length > k) {
      res.pop()
    }
  }
  return res
}
// @lc code=end
var nums = [1, 1, 1, 2, 2, 3],
  k = 2
;(nums = [2, 3, 3, 2, 2, 2, 1, 4, 3, 5, 5, 5]), (k = 5)
;(nums = [1, 2]), (k = 2)
;(nums = [4, 1, -1, 2, -1, 2, 3]), (k = 2)
;(nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]),
  (k = 10)
console.log(topKFrequent(nums, k))
