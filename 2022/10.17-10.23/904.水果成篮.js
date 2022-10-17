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
   * 用一个 Map 记录当前两种果树的最大数量，[key: 果树类型, value: 当前 Map 中该类型果树的数量]
   * 当 Map 的 size 小于 2 时，直接添加新类型的果树
   * 当 Map 的 size 等于 2，并且 Map 中有该类型的果树，更新 Map 中当前类型果树的数量
   * 如果 Map 中不含有当前类型的果树，需要移除第一种类型的果树，添加新类型的果树
   */
  const map = new Map()
  let res = 0
  let currNums = 0
  for (let i = 0; i < fruits.length; i++) {
    const v = fruits[i]
    if (map.size < 2 || map.has(v)) {
      map.set(v, ++currNums)
    } else {
      res = Math.max(res, currNums)
      const prevKey = fruits[i - 1]
      const oldKey = [...map.keys()].find(t => t !== prevKey)
      currNums = currNums - map.get(oldKey) + 1
      map.set(prevKey, map.get(prevKey) - map.get(oldKey))
      map.set(v, currNums)
      map.delete(oldKey)
    }
  }
  return Math.max(res, currNums)
}
// @lc code=end
let fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
fruits = [1, 2, 3, 2, 2]
fruits = [0, 1, 2, 2]
fruits = [1, 2, 1]
fruits = [1, 2, 2]
fruits = [0, 1, 6, 6, 4, 4, 6]
// fruits = [1, 0, 1, 4, 1, 4, 1, 2, 3]
let res = totalFruit(fruits)
console.log(res)
