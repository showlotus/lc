/*
 * @lc app=leetcode.cn id=1282 lang=javascript
 *
 * [1282] 用户分组
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const map = new Map()
  groupSizes.forEach((v, i) => {
    if (!map.has(v)) {
      map.set(v, [[i]])
    } else {
      const s = map.get(v)
      // 列表中最后一个数组的长度小于 size
      // 直接 push
      if (s[s.length - 1].length !== v) {
        s[s.length - 1].push(i)
      } else {
        s.push([i])
      }
    }
  })

  return Array.from(map.values()).flat()
}
// @lc code=end
var groupSizes = [3, 3, 3, 3, 3, 1, 3]
groupSizes = [2, 1, 3, 3, 3, 2]
groupSizes = [1, 1, 1, 2, 2, 3, 3, 3]
groupSizes = [2, 2, 1, 1, 1, 1, 1, 1]

var res = groupThePeople(groupSizes)

console.log(res)
