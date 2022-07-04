/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const MAX = 2 ** 31 - 1
  const nums = String(n).split("").map(Number)
  let len = nums.length
  let i = len - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // i < 0，即整个数组为倒序
  if (i < 0) {
    return -1
  } else {
    let j = len - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let l = i + 1
  let r = len - 1
  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }

  const res = Number(nums.join(""))

  return res > MAX ? -1 : res
}
// @lc code=end

/**
 * 检验两个数是否由相同的数字构成，两数的位数相同
 * @param {number} a
 * @param {number} b
 */
function isSameComposedDigits(a, b) {
  const aMap = getComposedDigits(a)
  const bMap = getComposedDigits(b)

  for (const key of aMap.keys()) {
    if (!bMap.has(key) || bMap.get(key) !== aMap.get(key)) {
      return false
    }
  }

  for (const key of bMap.keys()) {
    if (!aMap.has(key) || aMap.get(key) !== bMap.get(key)) {
      return false
    }
  }

  return true
}

/**
 * 获取数字的构成
 * @param {number} a
 * @return {Map} 数字构成的哈希表
 */
function getComposedDigits(a) {
  const map = new Map()
  while (a > 0) {
    const last = a % 10
    a = Math.floor(a / 10)
    map.set(last, (map.get(last) || 0) + 1)
  }
  return map
}

var n = 12

n = 2147483486
n = 2147483476
// n = 98765432
// n = 765432
n = 198765432
n = 21210
n = 2147483486

var res = nextGreaterElement(n)
console.log(res)
console.log(isSameComposedDigits(2100, 10032))
