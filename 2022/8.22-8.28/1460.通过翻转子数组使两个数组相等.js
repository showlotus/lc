/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const map = new Map()
  for (let i = 0, len = target.length; i < len; i++) {
    map.set(target[i], (map.get(target[i]) || 0) + 1)
    if (map.get(target[i]) === 0) {
      map.delete(target[i])
    }

    map.set(arr[i], (map.get(arr[i]) || 0) - 1)
    if (map.get(arr[i]) === 0) {
      map.delete(arr[i])
    }
  }
  return map.size === 0
}
// @lc code=end
var target = [3, 7, 9]
var arr = [3, 7, 11]

// target = [1, 2, 2, 3]
// arr = [1, 1, 2, 3]

target = [1, 2, 4, 3]
arr = [1, 3, 4, 2]

target = [4]
arr = [1]

var res = canBeEqual(target, arr)
console.log(res)
