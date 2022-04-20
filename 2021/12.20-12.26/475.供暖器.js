/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  /* 供暖器按从小到大排序 */
  heaters.sort((a, b) => a - b)
  let minDistance = Number.MIN_SAFE_INTEGER
  houses.forEach(house => {
    minDistance = Math.max(minDistance, binarySearch(house, heaters))
  })
  return minDistance
};

/**
 * 从供暖器列表中找到距离目标房屋最近的供暖器
 * @param {number} target - 目标房屋
 * @param {number[]} list - 供暖气列表
 * @return {number} 距离目标房屋最近的供暖器
 */
var binarySearch = function (target, list) {
  let len = list.length
  let left = 0
  let right = len - 1
  let middle = (left + right) >> 1
  let minDistance = Number.MAX_SAFE_INTEGER
  while (left <= right) {
    middle = (left + right) >> 1
    let distance = list[middle] - target
    minDistance = Math.min(Math.abs(distance), minDistance)
    if (distance > 0) {
      right = middle - 1
    } else if (distance < 0) {
      left = middle + 1
    } else {
      return 0
    }
  }
  return minDistance
}
// @lc code=end
var houses = [2, 3, 4, 6, 5, 6],
  heaters = [1, 4]
houses = [1, 5], heaters = [2]
houses = [6], heaters = [2]

console.log(findRadius(houses, heaters))
