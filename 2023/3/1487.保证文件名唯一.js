/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const map = new Map()
  const res = []
  for (const name of names) {
    if (!map.has(name)) {
      map.set(name, 1)
      res.push(name)
      continue
    }
    let nextIdx = map.get(name)
    while (map.has(genDir(name, nextIdx))) {
      nextIdx++
    }
    map.set(name, nextIdx + 1)
    map.set(genDir(name, nextIdx), 1)
    res.push(genDir(name, nextIdx))
  }
  return res
}

const genDir = (name, idx) => {
  return `${name}(${idx})`
}
// @lc code=end

let names = ["gta", "gta(1)", "gta", "avalon"]
names = ["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(4)", "onepiece"]

const res = getFolderNames(names)
console.log(res)
