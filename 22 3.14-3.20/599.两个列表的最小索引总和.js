/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = new Map()
  for (let i = 0, len = list2.length; i < len; i++) {
    map.set(list2[i], i)
  }

  let res = []
  let minIndex = Number.MAX_SAFE_INTEGER
  list1.forEach((v, i) => {
    if (map.has(v)) {
      let indexSum = i + map.get(v)
      if (indexSum < minIndex) {
        res = [v]
        minIndex = indexSum
      } else if (indexSum === minIndex) {
        res.push(v)
      }
    }
  })
  return res
}
// @lc code=end
var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

;(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
  (list2 = ["KFC", "Shogun", "Burger King"])

list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"]

console.log(findRestaurant(list1, list2))
