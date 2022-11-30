/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  /**
   * 滑动窗口
   */
  const map = new Map()
  const n = fruits.length
  let res = 0
  let left = 0
  for (let right = 0; right < n; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1)
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      ++left
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
// @lc code=end
let fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
fruits = [1, 2, 3, 2, 2]
fruits = [0, 1, 2, 2]
fruits = [1, 2, 1]
fruits = [1, 2, 2]
fruits = [0, 1, 6, 6, 4, 4, 6]
fruits = [1, 0, 1, 4, 1, 4, 1, 2, 3]
let res = totalFruit(fruits)
console.log(res)
