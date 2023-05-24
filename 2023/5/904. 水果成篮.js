/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 长度最小的子数组，用滑动窗口记录，每当窗口中的数之和大于 target 时，缩小窗口，更新最小窗口长度
  // 可以类比到本题，只不过滑动窗口记录的是每个种类水果的数量用一个 Map 做记录
  // 每当窗口的长度大于 2 时，缩小窗口，并且头部对应种类的水果数量减一
  // 如果某个分类水果数量减一后为 0，则需要从 Map 中删除当前分类
  const map = new Map()
  let i = 0
  let res = 0
  for (let j = 0; j < fruits.length; j++) {
    map.set(fruits[j], (map.get(fruits[j]) || 0) + 1)
    while (map.size > 2) {
      map.set(fruits[i], map.get(fruits[i]) - 1)
      if (map.get(fruits[i]) === 0) {
        map.delete(fruits[i])
      }
      i++
    }
    res = Math.max(res, j - i + 1)
  }
  return res
}

let fruits = [1, 2, 1]
fruits = [0, 1, 2, 2]
fruits = [1, 2, 3, 2, 2]
fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]

const res = totalFruit(fruits)
console.log(res)
