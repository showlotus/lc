/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  /* 
    小镇法官要得到所有人的票（除了自己），即 n - 1
    且小镇法官只能被信任，即 trust[i][0] !== judge
  */
  if (n === 1) return 1
  let map = new Map()
  let manMap = new Map()
  for (let [man, trustMan] of trust) {
    if (!manMap.has(man)) {
      manMap.set(man, 1)
      if (manMap.size === n) {
        return -1
      }
    }
    if (!map.has(trustMan)) {
      map.set(trustMan, 1)
    } else {
      let trustManNum = map.get(trustMan) + 1
      map.set(trustMan, trustManNum)
    }
  }
  for (let [trustMan, num] of map.entries()) {
    if (!manMap.has(trustMan) && num === n - 1) {
      return trustMan
    }
  }
  return -1
};
// @lc code=end

var n = 2,
  trust = [
    [1, 2]
  ]
n = 3, trust = [
  [1, 3],
  [2, 3],
  [2, 1],
  [3, 2]
]

n = 4, trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3]
]

n = 1, trust = []
console.log(findJudge(n, trust))
